"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success(result.message);
      setMsg(result.message);
    } else {
      toast.error(result.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left illustration */}
        <div className="w-full hidden md:w-1/2 bg-brand-gold p-8 md:flex justify-center items-center">
          <img
            src="/auth/forgot-password.png"
            alt="Forgot illustration"
            className="w-64"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Forgot Your Password?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your email and we&apos;ll send you a reset link.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="relative">
                <Mail className="absolute top-3 left-3 w-4 h-4 text-primary" />
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="pl-9 py-4 "
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full  font-semibold  text-white hover:brightness-110 transition py-2 rounded-lg shadow"
            >
              RESET PASSWORD
            </Button>
          </form>

          <div className="mt-3 text-center">
            <Link href="/login" className="text-sm text-primary underline">
              Back to Login
            </Link>
          </div>
          <div className="mt-3 text-sm text-center text-green-600 font-bold word-wrap">
            {msg}
          </div>
        </div>
      </div>
    </div>
  );
}
