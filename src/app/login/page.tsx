"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LoginForm } from "@/components/form/LoginForm";

import { useLogin } from "@/hooks/api/useLogin";
import { useLoginForm } from "@/hooks/formik/useLoginForm";

export default function LoginPage() {
  const { handleLogin, loginError, resetApiResponseErrors } = useLogin();
  const { formik, handleChange } = useLoginForm(
    handleLogin,
    resetApiResponseErrors
  );

  const router = useRouter();
  useEffect(() => {
    const userIdCookies = getCookie("userId");
    if (userIdCookies) {
      router.push("/dashboard");
      return;
    }
  }, [router]);

  const FormValues = {
    loginError,
    formik,
    handleChange,
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-lightGray">
      <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
        <h1 className="text-center text-3xl font-bold">Welcome</h1>
        <span className="block min-h-[50px] w-full py-8 text-center">LOGO</span>
        <LoginForm {...FormValues} />
      </div>
    </div>
  );
}
