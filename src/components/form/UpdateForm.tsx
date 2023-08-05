"use client";

import { useFormik } from "formik";
import { useState } from "react";

import { ErrorMessage } from "@/components/form/ErrorMessage";
import { UpdateConfirmation } from "@/components/form/UpdateConfirmation";
import { HashPasswordInput } from "@/components/HashPasswordInput";

import { emailSchema, passowordSchema } from "@/lib/validation";

import { useUpdateCredentials } from "@/hooks/api/useUpdateCredentials";
import { useSession } from "@/hooks/state/useSession";

import { LabelText } from "./LabelText";

interface UpdateForm {
  defaultValue: string;
  id: number;
  type: "email" | "password";
}

export function UpdateForm({ defaultValue, id, type }: UpdateForm) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { logout } = useSession();
  const { mutate: handleUpdateUser } = useUpdateCredentials(id);

  const formik = useFormik({
    initialValues:
      type === "email" ? { email: defaultValue } : { password: "" },
    validationSchema: type === "email" ? emailSchema : passowordSchema,
    onSubmit: () => {
      handleUpdateUser(updateValue, {
        onSuccess: () => {
          setIsReadOnly(true);
          logout();
        },
      });
    },
  });

  const onCancel = () => {
    formik.resetForm();
    setIsReadOnly(true);
  };

  const updateValue =
    type === "email"
      ? { email: formik.values.email || "" }
      : { password: formik.values.password || "" };

  return (
    <div className="flex flex-col gap-1">
      <form
        className="flex max-w-[250px] flex-col gap-2 lg:max-w-[unset] lg:flex-row lg:items-end lg:gap-4"
        onSubmit={formik.handleSubmit}
      >
        {type === "email" && (
          <label className="flex flex-col gap-1">
            <LabelText>Update Email</LabelText>
            <input
              name="email"
              type="email"
              placeholder="JohnCruise@gmail.com"
              className="min-w-[256px] rounded-sm p-2 dark:bg-midnightBlue"
              readOnly={isReadOnly}
              value={isReadOnly ? defaultValue : formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-required
            />
          </label>
        )}

        {type === "password" && (
          <label className="flex flex-col gap-1">
            <LabelText>Update Password</LabelText>
            <HashPasswordInput
              value={isReadOnly ? defaultValue : formik.values.password}
              handleChange={formik.handleChange}
              readOnly={isReadOnly}
              styled="settings"
              aria-required
            />
          </label>
        )}

        <UpdateConfirmation
          isReadOnly={isReadOnly}
          onCancel={onCancel}
          setIsReadOnly={setIsReadOnly}
        />
      </form>
      {formik.errors.email && (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      )}
      {formik.errors.password && (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      )}
    </div>
  );
}
