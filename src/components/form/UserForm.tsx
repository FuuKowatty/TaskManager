import type { FormikProps } from "formik";

import type { ErrorMessageType } from "@/types/errorMessage";
import type { FormRegister } from "@/types/users";

import { ErrorMessage } from "./ErrorMessage";
import { LabelText } from "./LabelText";
import { ButtonCancel } from "../button/ButtonCancel";
import { FormButton } from "../button/ButtonForm";
import { HashPasswordInput } from "../HashPasswordInput";

interface CreateUserFormProps {
  formik: FormikProps<FormRegister>;
  createError: ErrorMessageType | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  submitText: string;
}

export function UserForm({
  formik,
  createError,
  handleChange,
  handleClose,
  submitText,
}: CreateUserFormProps) {
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
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="John"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.name && formik.touched.name ? formik.errors.name : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Surname</LabelText>
          <input
            type="text"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="Cruise"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.surname && formik.touched.surname
            ? formik.errors.surname
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
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="JohnCruise@gmail.com"
            required
          />
        </label>
        <ErrorMessage>
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : createError && createError.type === "email"
            ? createError.message
            : ""}
        </ErrorMessage>
      </fieldset>
      <fieldset>
        <label className="flex flex-col gap-1">
          <LabelText required>Password</LabelText>
          <HashPasswordInput
            value={formik.values.password}
            handleChange={formik.handleChange}
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
            required
          >
            <option selected value={"employee"}>
              {"employee"}
            </option>
            <option value={"manager"}>{"manager"}</option>
          </select>
        </label>
        <ErrorMessage>
          {formik.errors.role && formik.touched.role ? formik.errors.role : ""}
        </ErrorMessage>
      </fieldset>
      <div className="flex flex-col gap-2">
        <ButtonCancel handleCancel={handleClose} />
        <FormButton>{submitText}</FormButton>
      </div>
    </form>
  );
}
