"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function Register() {
  const router = useRouter();

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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerMutation = useMutation({
    mutationFn: async (userData) => {
      const response = await axios.post("/api/auth/register", userData);
      return response.data;
    },
    onSuccess: async (_, variables) => {
      const result = await signIn("credentials", {
        email: variables.email,
        password: variables.password,
        redirect: false,
      });

      if (!result?.error) {
        toast.success("Registration successful!");
        router.push("/dashboard");
      }
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed");
      console.error(error.response?.data?.message || "Registration failed");
    },
  });

  const onSubmit = (data) => {
    registerMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* 🟡 Left Jewel Image */}
      <div className="hidden lg:block relative bg-primary">
        <img
          src="/auth/login_bg.png"
          alt="Jewellery Showcase"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <h2 className="text-4xl font-poppins font-semibold leading-tight text-primary">
            Create Your Infodazz Account
          </h2>
        </div>
      </div>

      {/* 🟡 Right Register Form */}
      <div className="flex flex-col justify-center items-center px-6 py-12 bg-white text-gray-900 font-lato">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-brand-light">
          <div className="flex justify-center mb-6">
            <img
              src="/logo/logo_blue.png"
              alt="Infodazz Logo"
              className="h-16 object-contain"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute top-3 left-3 w-4 h-4 text-primary" />
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="pl-9"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute top-3 left-3 w-4 h-4 text-primary" />

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
                  placeholder="Enter Password"
                  className="pl-9"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute top-3 left-3 w-4 h-4 text-primary" />
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
                  placeholder="Confirm Password"
                  className="pl-9"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || registerMutation.isLoading}
              className="w-full"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-700">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline hover:text-brand-gold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
