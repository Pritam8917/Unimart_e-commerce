import mongoose, { Schema, Document, models } from "mongoose";

// Define TypeScript interface for user data
export interface IUser extends Document {
  username: string;
  email: string;
  password?: string; // optional for Google/OAuth users
  provider: "credentials" | "google" | "github" | "facebook";
  createdAt: Date;
  updatedAt: Date;
}


const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: function (this: IUser) {
        return this.provider === "credentials";
      },
    },
    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in Next.js hot reload
const User = models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
