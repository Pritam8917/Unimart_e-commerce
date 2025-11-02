import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/db/dbConfig";
import User from "@/models/user.models";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          await connect();

          //  Find user by email
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("user not found");
          }

          //  Validate password
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Invalid password");
          }

          //  Return safe user object (no password) for saving in jwt & session
          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
          };

        } catch (err: any) {
          console.error("❌ Authorization error:", err);
          throw new Error(err.message || "Authorization failed");
        }
      },
    }),
  ],

  callbacks: {
    //  Attach user.id to JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user?.email;
      }
      return token;
    },

    //  Attach id to session
    async session({ session, token }) {
      if (session.user) (session.user as any).id = token.id;
      if (session.user) (session.user as any).email = token.email;
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
