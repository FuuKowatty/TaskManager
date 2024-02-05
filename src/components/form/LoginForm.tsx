import { useLogin } from "@/hooks/api/useLogin";
import { ButtonForm } from "../button/ButtonForm";
import { ErrorMessage } from "./ErrorMessage";
import { HashPasswordInput } from "./HashPasswordInput";
import { LabelText } from "./LabelText";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLoginForm } from "@/hooks/form/useLoginForm";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { useLoginDemo } from "@/hooks/api/useLoginDemo";


export function LoginForm() {
  const router = useNavigate();
  const { mutate: handleLoginDemo } = useLoginDemo();
  const {
    mutate: handleLogin,
    error: loginError,
    reset: resetApiResponseErrors,
  } = useLogin();
  const responseError = getErrorMessage(loginError);
  const { formik, handleChange } = useLoginForm(
    handleLogin,
    resetApiResponseErrors
  );


  useEffect(() => {
    const userIdCookies = Cookies.get('token');
    if (userIdCookies) {
      router("/dashboard");
    }
  }, [router]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex max-w-md flex-col gap-8 "
    >
      <div>
        <label className="flex flex-col gap-1 dark:text-white">
          <LabelText required>Email</LabelText>
          <input
            type="email"
            name="email"
            placeholder="JohnCruise@gmail.com"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="min-w-[256px] border-b-2 border-gray-400 p-1
            text-black focus:border-b-blue-700 focus:outline-none dark:border-gray-600  dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500
            "
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : responseError && responseError.type === "email"
            ? responseError.message
            : ""}
        </ErrorMessage>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          <LabelText required>Password</LabelText>
          <HashPasswordInput
            styled="createUser"
            value={formik.values.password}
            handleChange={handleChange}
            onBlur={formik.handleBlur}
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : responseError && responseError.type === "password"
            ? responseError.message
            : ""}
        </ErrorMessage>
      </div>
      <ButtonForm>Login</ButtonForm>
      <div className="mt-8 text-sm dark:text-white">
        Don&apos;t want login?{" "}
        <button
          type="button"
          className="font-bold"
          onClick={() => handleLoginDemo()}
        >
          View Demo
        </button>
      </div>
    </form>
  );
}
