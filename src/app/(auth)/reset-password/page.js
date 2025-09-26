"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password"),
});

export default function ResetPasswordPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");
  const token = params.get("token");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ ...data, email, token }),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success(result.message);
      router.push("/login");
    } else {
      toast.error(result.message || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 bg-primary">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 text-center">
        {/* Logo */}
        <img
          src="/auth/reset-password.png"
          alt="Logo"
          className="w-20 h-20 mx-auto mb-4"
        />

        <h2 className="text-2xl font-semibold text-gray-700">Reset password</h2>
        <p className="text-sm text-gray-500 mb-6">
          Please kindly set your new password
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
          {/* New Password */}
          <div>
            <div className="relative">
              <LockKeyhole className="absolute top-3 left-3 w-4 h-4 text-primary" />
              {showPassword ? (
                <EyeOff
                  onClick={handleTogglePassword}
                  className="absolute top-3 right-3 w-4 h-4 text-primary cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={handleTogglePassword}
                  className="absolute top-3 right-3 w-4 h-4 text-primary cursor-pointer"
                />
              )}
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                className="pl-9 py-4"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <LockKeyhole className="absolute top-3 left-3 w-4 h-4 text-primary" />
              {showConfirmPassword ? (
                <EyeOff
                  onClick={handleToggleConfirmPassword}
                  className="absolute top-3 right-3 w-4 h-4 text-primary cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={handleToggleConfirmPassword}
                  className="absolute top-3 right-3 w-4 h-4 text-primary cursor-pointer"
                />
              )}
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="pl-9 py-4"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full  text-white font-semibold py-3 text-base rounded-sm"
          >
            Reset Password
          </Button>
          <div className="mt-3 text-center">
            <Link href="/login" className="text-sm text-primary underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
