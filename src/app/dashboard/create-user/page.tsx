"use client";

import { FormButton } from "@/components/button/ButtonForm";

import { useCreateUserForm } from "@/hooks/formik/useCreateUserForm";

export default function CreateUser() {
  const { formik } = useCreateUserForm();

  return (
    <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
      <h1 className="text-center text-3xl font-bold">Create User</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-xl flex-col gap-8"
      >
        <fieldset>
          <label className="flex flex-col gap-1">
            Name
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              placeholder="John"
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.name && formik.errors.name && (
              <>{formik.errors.name}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Surname
            <input
              type="text"
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              placeholder="Cruise"
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.surname && formik.errors.surname && (
              <>{formik.errors.surname}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Email
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              placeholder="JohnCruise@gmail.com"
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.email && formik.errors.email && (
              <>{formik.errors.email}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Password
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              placeholder="Must have at least 6 characters"
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.password && formik.errors.password && (
              <>{formik.errors.password}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Select a role
            <select
              className="border-b-2 border-gray-400 bg-white p-2 focus:border-blue-700 focus:outline-none"
              name="role"
              value={formik.values.role}
              onChange={(e) => formik.handleChange(e)}
            >
              <option selected value={"employee"}>
                {"employee"}
              </option>
              <option value={"manager"}>{"manager"}</option>
            </select>
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.role && formik.errors.role && (
              <>{formik.errors.role}</>
            )}
          </p>
        </fieldset>
        <FormButton>Create User</FormButton>
      </form>
    </div>
  );
}
