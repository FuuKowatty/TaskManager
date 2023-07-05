import { useFormik } from "formik";
import { useRouter } from "next/router";

import { validationSchema } from "@/lib/validation";

import { useLogin } from "@/hooks/useLogin";
import { useSession } from "@/state/useSession";

export function useLoginForm() {
  const { handleLogin, getLoginErrorMessage, resetLoginState, data } =
    useLogin();

  const router = useRouter();
  const { setSessionUser } = useSession();

  const loginError = getLoginErrorMessage();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      const setUserState = () => {
        if (!data) {
          return;
        }
        setSessionUser(data);
        router.push("/dashboard");
      };
      handleLogin({ email, password }, { onSuccess: setUserState });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetLoginState();
    formik.handleChange(e);
  };

  return { handleChange, formik, loginError };
}
