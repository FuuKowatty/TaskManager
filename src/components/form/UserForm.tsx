import type { FormikProps } from "formik";

import type { ErrorMessageType } from "@/types/errorMessage";
import { Role, type FormRegister } from "@/types/users";

import { ErrorMessage } from "./ErrorMessage";
import { LabelText } from "./LabelText";
import { ButtonCancel } from "../button/ButtonCancel";
import { ButtonForm } from "../button/ButtonForm";
import { HashPasswordInput } from "./HashPasswordInput";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "@/hooks/api/useCreateUser";
import { useCreateUserForm } from "@/hooks/form/useCreateUserForm";
import { getErrorMessage } from "@/lib/getErrorMessage";

export function UserForm() {

  const router = useNavigate();
  const {
    mutate: handleCreateUser,
    error: createError,
    reset: resetApiResponseError,
  } = useCreateUser();
  const responseError = getErrorMessage(createError);
  const { formik, handleChange } = useCreateUserForm(
    handleCreateUser,
    resetApiResponseError
  );

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full flex-col gap-8 text-left lg:max-w-xl"
    >
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Name</LabelText>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="John"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Surname</LabelText>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="Cruise"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.lastName && formik.touched.lastName
            ? formik.errors.lastName
            : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Email</LabelText>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="JohnCruise@gmail.com"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : createError && responseError.type === "email"
            ? responseError.message
            : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Password</LabelText>
          <HashPasswordInput
            value={formik.values.password}
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            styled="createUser"
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Select a role</LabelText>
          <select
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            name="role"
            value={formik.values.role}
            onChange={(e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
            required
          >
            {Object.values(Role)
              .filter(role => role !== Role.admin)
              .map(role => <option value={role}>{role}</option>)}
          </select>
        </label>
        <ErrorMessage>
          {formik.errors.role && formik.touched.role ? formik.errors.role : ""}
        </ErrorMessage>
      </fieldset>
      <div className="flex flex-col gap-2">
        <ButtonCancel handleCancel={() => router("/dashboard/team")} />
        <ButtonForm>Create User</ButtonForm>
      </div>
    </form>
  );
}
