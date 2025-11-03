import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/db/dbConfig";
import User from "@/models/user.models";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          await connect();

          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("user not found");
          }

          if (user.provider === "google") {
            throw new Error(
              "This email is registered with Google. Please sign in using Google"
            );
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("Invalid password");
          }

          //  Return safe user object (no password) for saving in jwt & session
          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            name: user.username,
          };
        } catch (err: any) {
          console.error("❌ Authorization error:", err);
          throw new Error(err.message || "Authorization failed");
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

      if (account?.provider === "google") {
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
      // when user first logs in (authorize() returns user)
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = (user as any).name || (user as any).username || "";
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).email = token.email;
        (session.user as any).name = token.name;
      }
      return session;
    },
  },

  //  Custom pages (update path to your actual login page)
  pages: {
    signIn: "/auth/LoginPage", // matches your folder structure
  },

  //  Session configuration
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  //  Required for security
  secret: process.env.NEXTAUTH_SECRET,
};

//  Export for Next.js route handling
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
