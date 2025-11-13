"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import Image from "next/image";

// ✅ Define types for forms
interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
  });

  // ✅ Typed change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formType: "login" | "signup"
  ) => {
    const { id, value } = e.target;
    if (formType === "login") {
      setLoginData((prev) => ({ ...prev, [id]: value }));
    } else {
      const field = id.replace("signup-", "") as keyof SignupData;
      setSignupData((prev) => ({ ...prev, [field]: value }));
    }
  };

  // 🔐 Login (Credentials)
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: loginData.email,
        password: loginData.password,
      });

      if (res?.error) {
        switch (res.error) {
          case "Invalid password":
            toast.error("Incorrect password. Please try again.");
            break;
          case "User not found":
            toast.error("User not found. Please sign up first.");
            setActiveTab("signup");
            break;
          case "This email is registered with Google. Please sign in using Google":
            toast.error(
              "This email is registered with Google. Please sign in using Google"
            );
            break;
          default:
            toast.error("Login failed. Please try again.");
        }
      } else {
        toast.success("Login successful!");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  // 🧾 Signup
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post<{ message?: string }>("/api/register", {
        username: signupData.username,
        email: signupData.email,
        password: signupData.password,
      });

      toast.success(res.data.message || "Account created successfully!");
      setActiveTab("login");
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      const errorMessage =
        err.response?.data?.message || "Signup failed. Please try again.";

      toast.error(errorMessage);
      if (errorMessage === "User already exists") setActiveTab("login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome</h1>

            <Tabs
              value={activeTab}
              onValueChange={(val) => setActiveTab(val as "login" | "signup")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* LOGIN TAB */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => handleChange(e, "login")}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleChange(e, "login")}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-[#08A0AA] text-white hover:bg-[#20A9B2]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>

                  <div className="flex items-center my-4">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-500 text-sm">or</span>
                    <div className="grow border-t border-gray-300"></div>
                  </div>

                  {/* Google Login */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full mt-2 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      signIn("google", { callbackUrl: "/ProfilePage" })
                    }
                  >
                    <Image
                      src="/assets/google.svg"
                      alt="Google logo"
                      width={10}
                      height={10}
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </Button>

                  <Button type="button" variant="link" className="w-full">
                    Forgot password?
                  </Button>
                </form>
              </TabsContent>

              {/* SIGNUP TAB */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Full Name</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Pritam Kumar"
                      value={signupData.username}
                      onChange={(e) => handleChange(e, "signup")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signupData.email}
                      onChange={(e) => handleChange(e, "signup")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => handleChange(e, "signup")}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="cursor-pointer w-full bg-[#08A0AA] text-white hover:bg-[#20A9B2]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
