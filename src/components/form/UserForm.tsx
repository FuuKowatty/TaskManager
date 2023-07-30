import type { FormikProps } from "formik";

import type { ErrorMessageType } from "@/types/errorMessage";
import type { FormRegister } from "@/types/users";

import { ErrorMessage } from "./ErrorMessage";
import { ButtonCancel } from "../button/ButtonCancel";
import { FormButton } from "../button/ButtonForm";
import { HashPasswordInput } from "../HashPasswordInput";

interface CreateUserFormProps {
  formik: FormikProps<FormRegister>;
  createError?: ErrorMessageType;
  handleClose: () => void;
  buttonText: string;
}

export function UserForm({
  formik,
  createError,
  handleClose,
  buttonText,
}: CreateUserFormProps) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full flex-col gap-8 text-left lg:max-w-xl"
    >
      <fieldset>
        <label className="flex flex-col gap-1">
          Name
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
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
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
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
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="JohnCruise@gmail.com"
          />
        </label>
        <p className="min-h-[30px] text-sm text-red-500" role="alert">
          {formik.touched.email && formik.errors.email ? (
            <>{formik.errors.email}</>
          ) : (
            createError &&
            createError.type === "email" && <>{createError.message}</>
          )}
        </p>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          Password
          <HashPasswordInput
            value={formik.values.password}
            handleChange={formik.handleChange}
            styled="createUser"
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
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
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
      <div className="flex flex-col gap-2">
        <ButtonCancel handleCancel={handleClose} />
        <FormButton>{buttonText}</FormButton>
      </div>
    </form>
  );
}
