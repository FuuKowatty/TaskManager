"use client";

import { useLoginForm } from "@/hooks/useLoginForm";

export function FormLogin() {
  const { formik, loginError, handleChange } = useLoginForm();

  return (
    <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
      <h1 className="text-center text-3xl font-bold">Welcome</h1>
      <span className="block min-h-[50px] w-full py-8 text-center">LOGO</span>
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
            {formik.touched.email && formik.errors.email && (
              <>{formik.errors.email}</>
            )}

            {loginError && loginError.type === "email" && (
              <>{loginError.message}</>
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
          <div>
            <p className="min-h-[30px] text-sm text-red-500" role="alert">
              {formik.touched.password && formik.errors.password && (
                <>{formik.errors.password}</>
              )}

              {loginError && loginError.type === "password" && (
                <>{loginError.message}</>
              )}
            </p>
          </div>
        </fieldset>
        <button
          type="submit"
          className="rounded-2xl bg-blue-700 py-2 text-white"
        >
          Login
        </button>
        <div className="mt-8 text-sm">
          Don&apos;t want login? <span className="font-bold">View Demo</span>
        </div>
      </form>
    </div>
  );
}
