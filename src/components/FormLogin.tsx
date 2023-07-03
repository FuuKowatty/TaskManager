"use client";
import { useFormik } from "formik";
import { validationSchema } from "@/lib/validation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUsers } from "@/redux/services/fetchUsers";
import { login } from "@/redux/featrues/userSlice";
import { useRouter } from "next/navigation";

export function FormLogin() {
  const router = useRouter();
  const response = useAppSelector((state) => state.usersReducer);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      await dispatch(getUsers());
      dispatch(
        login({
          email,
          password,
        })
      );
    },
  });

  if (response.loggedUser) {
    router.push("/dashboard");
  }

  return (
    <div className="bg-white text-darkGray rounded-md pt-24 px-16 pb-8 shadow-md shadow-gray-300 focus-within:">
      <h1 className="text-3xl font-bold text-center">Welcome</h1>
      <span className="text-center w-full block py-8 min-h-[50px]">LOGO</span>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8 max-w-md"
      >
        <fieldset>
          <label className="flex flex-col gap-1">
            Email
            <input
              type="email"
              name="email"
              placeholder="JohnCruise@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-1 text-black border-b-2 border-gray-400
              focus:outline-none focus:border-b-blue-700
              "
            />
          </label>
          <p className="text-sm text-red-500 min-h-[30px]" role="alert">
            {formik.touched.email && <>{formik.errors.email}</>}
            {response.response.message === 'Email not found' && <>{response.response.message}</>}
          </p>
        </fieldset>
        <fieldset w-full h-full>
          <label className="flex flex-col gap-1">
            Password
            <input
              type="password"
              name="password"
              placeholder="Must have at least 6 characters"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="p-1 text-black border-b-2 border-gray-400
              focus:outline-none focus:border-b-blue-700"
            />
          </label>
          <div>
          <p className="text-sm text-red-500 min-h-[30px]" role="alert">
            {formik.touched.password && <>{formik.errors.password}</>}
            {response.response.message === 'Wrong password' && <>{response.response.message}</>}
          </p>
          </div>
        </fieldset>
        <button type="submit" className="py-2 rounded-2xl bg-blue-700 text-white">Login</button>
        <div className="text-sm mt-8">Don&apos;t want login? <span className="font-bold">View Demo</span></div>
      </form>
    </div>
  );
}
