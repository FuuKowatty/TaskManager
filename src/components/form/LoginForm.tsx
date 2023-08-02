import type { FormikProps } from "formik";
import type { ChangeEvent } from "react";

import { useLoginDemo } from "@/hooks/api/useLoginDemo";
import type { ErrorMessageType } from "@/types/errorMessage";
import type { FormLogin } from "@/types/users";

import { ErrorMessage } from "./ErrorMessage";
import { LabelText } from "./LabelText";
import { FormButton } from "../button/ButtonForm";
import { HashPasswordInput } from "../HashPasswordInput";

interface LoginFormProps {
  loginError: ErrorMessageType;
  formik: FormikProps<FormLogin>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function LoginForm({
  loginError,
  formik,
  handleChange,
}: LoginFormProps) {
  const { handleLoginDemo } = useLoginDemo();

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
            : loginError && loginError.type === "email"
            ? loginError.message
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
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : loginError && loginError.type === "password"
            ? loginError.message
            : ""}
        </ErrorMessage>
      </div>
      <FormButton>Login</FormButton>
      <div className="mt-8 text-sm dark:text-white">
        Don&apos;t want login?{" "}
        <button className="font-bold" onClick={() => handleLoginDemo()}>
          View Demo
        </button>
      </div>
    </form>
  );
}
