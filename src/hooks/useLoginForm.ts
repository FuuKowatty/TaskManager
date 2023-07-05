import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { validationSchema } from "@/lib/validation";

import { useLogin } from "@/hooks/useLogin";
import { useSession } from "@/state/useSession";

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin, getLoginErrorMessage, resetLoginState } = useLogin();

  const router = useRouter();
  const { setSessionUser } = useSession();

  const loginError = getLoginErrorMessage();

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (formData) => {
      startLoading();
      handleLogin(formData, {
        onSuccess(data) {
          setSessionUser(data);
          router.push("/dashboard");
        },
        onSettled: stopLoading,
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetLoginState();
    formik.handleChange(e);
  };

  return {
    handleChange,
    formik,
    loginError,
    isLoading,
    startLoading,
    stopLoading,
  };
}
