"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSettings } from "@/context/SettingsContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const { settings } = useSettings();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result.error) {
        toast.error(result.error);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error("❌ Login Error:", err);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* 🟡 Left side image section */}
      <div className="hidden lg:block relative">
        <Image
          src="/auth/login_bg.png"
          alt="InfoDazz logo"
          fill
          sizes="(min-width: 1024px) 676px, 0px"
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-5 left-10 text-white z-10">
          <h2
            className="text-4xl font-poppins font-semibold leading-tight text-white"
            style={{ textShadow: "2px 2px 4px var(--primary)" }}
          >
            Welcome to Infodazz
          </h2>
        </div>
      </div>

      {/* 🟡 Right side form section */}
      <div className="flex flex-col justify-center items-center px-6 py-12 bg-primary text-gray-900 font-lato">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-brand-gold">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full h-16">
              <Image
                src={settings?.logo || "/logo/logo_blue.png"}
                alt="Infodazz Logo"
                fill
                sizes="382px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute top-3 left-3 w-4 h-4 text-primary" />
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="pl-9 border-primary"
                  autoComplete="email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
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
                  className="pl-9 border-primary"
                  autoComplete="current-password"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* 🔗 Forgot Password */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-xs text-primary underline hover:text-brand-gold transition"
              >
                Forgot Password?
              </Link>
            </div>
            {/* Login Button */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* 🔗 Register Link */}
          {/* <div className="text-center mt-6">
            <p className="text-sm text-gray-700">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-primary underline hover:text-brand-gold"
              >
                Register
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
