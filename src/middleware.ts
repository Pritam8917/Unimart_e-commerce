import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("🧭 Auth Middleware triggered:", req.nextUrl.pathname);
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("🪪 Token in middleware:", token);
        return !!token; // allow only if token exists
      },
    },
    pages: {
      signIn: "/auth/LoginPage",
    },
  }
);

export const config = {
  matcher: ["/wishlistpage", "/CartPage", "/ProfilePage", "/checkoutpage"],
};
