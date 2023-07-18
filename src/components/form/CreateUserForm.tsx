import type { FormikProps } from "formik";

import { ErrorMessage } from "./ErrorMessage";
import { FormButton } from "../button/ButtonForm";

export function CreateUserForm({
  formik,
}: {
  formik: FormikProps<FormRegister>;
}) {
  return (
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
        <ErrorMessage
          error={formik.errors.name}
          touched={formik.touched.name}
        />
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
        <ErrorMessage
          error={formik.errors.surname}
          touched={formik.touched.surname}
        />
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
        <ErrorMessage
          error={formik.errors.email}
          touched={formik.touched.email}
        />
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
        <ErrorMessage
          error={formik.errors.password}
          touched={formik.touched.password}
        />
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
        <ErrorMessage
          error={formik.errors.role}
          touched={formik.touched.role}
        />
      </fieldset>
      <FormButton>Create User</FormButton>
    </form>
  );
}
