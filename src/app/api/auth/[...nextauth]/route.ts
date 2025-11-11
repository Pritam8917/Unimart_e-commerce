import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { connect } from "@/db/dbConfig";
import User from "@/models/user.models";
import NextAuth from "next-auth";
interface SafeUser {
  id: string;
  email: string;
  name: string;
  username?: string;
}

 const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<SafeUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          await connect();
          const user = await User.findOne({ email: credentials.email });

          if (!user) throw new Error("User not found");

          if (user.provider === "google") {
            throw new Error("This email is registered with Google. Please sign in using Google");
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) throw new Error("Invalid password");

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            username: user.username,
          };
        } catch (err) {
          if (err instanceof Error) {
            console.error("❌ Authorization error:", err.message);
            throw new Error(err.message);
          }
          console.error("❌ Unknown authorization error:", err);
          throw new Error("Authorization failed");
        }
      },
    }),

    GoogleProvider({
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      await connect();

      if (account?.provider === "google" && user.email) {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            username: user.name,
            email: user.email,
            provider: "google",
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        const safeUser = user as SafeUser;
        token.id = safeUser.id;
        token.email = safeUser.email;
        token.name = safeUser.name || safeUser.username || "";
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/LoginPage",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
