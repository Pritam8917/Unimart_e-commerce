import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/db/dbConfig";
import User from "@/models/user.models";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    await connect();

    // For existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    await User.create({ username, email, password: hashPassword });
    

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Register Error:", error);
    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}
