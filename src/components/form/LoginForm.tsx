import type { FormikProps } from "formik";
import type { ChangeEvent } from "react";

import { useLoginDemo } from "@/hooks/api/useLoginDemo";

import { FormButton } from "../button/ButtonForm";

interface LoginFormProps {
  loginError: ErrorMessage;
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
      className="flex max-w-md flex-col gap-8"
    >
      <fieldset>
        <label className="flex flex-col gap-1">
          Email
          <input
            type="email"
            name="email"
            placeholder="JohnCruise@gmail.com"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="min-w-[256px] border-b-2 border-gray-400 p-1
            text-black focus:border-b-blue-700 focus:outline-none
            "
          />
        </label>
        <p className="min-h-[30px] text-sm text-red-500" role="alert">
          {formik.touched.email && formik.errors.email ? (
            <>{formik.errors.email}</>
          ) : (
            loginError &&
            loginError.type === "email" && <>{loginError.message}</>
          )}
        </p>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          Password
          <input
            type="password"
            name="password"
            placeholder="Must have at least 6 characters"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="min-w-[256px] border-b-2 border-gray-400 p-1
            text-black focus:border-b-blue-700 focus:outline-none"
          />
        </label>
        <p className="min-h-[30px] text-sm text-red-500" role="alert">
          {formik.touched.password && formik.errors.password ? (
            <>{formik.errors.password}</>
          ) : (
            loginError &&
            loginError.type === "password" && <>{loginError.message}</>
          )}
        </p>
      </fieldset>
      <FormButton>Login</FormButton>
      <div className="mt-8 text-sm">
        Don&apos;t want login?{" "}
        <span className="font-bold" onClick={() => handleLoginDemo()}>
          View Demo
        </span>
      </div>
    </form>
  );
}
