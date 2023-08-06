"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { ErrorMessage } from "@/components/form/ErrorMessage";
import { UpdateConfirmation } from "@/components/form/UpdateConfirmation";

import { passowordSchema } from "@/lib/validation";

import { useUpdateCredentials } from "@/hooks/api/useUpdateCredentials";
import { useSession } from "@/hooks/state/useSession";

import { LabelText } from "./LabelText";
import { HashPasswordInput } from "../HashPasswordInput";

interface UpdateForm {
  defaultValue: string;
  id: number;
}

export function UpdatePasswordForm({ defaultValue, id }: UpdateForm) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { logout } = useSession();
  const { mutate: handleUpdateUser } = useUpdateCredentials(id);

  const formik = useFormik({
    initialValues: {
      password: defaultValue,
    },
    validationSchema: Yup.object({ ...passowordSchema }),
    onSubmit: (formData: { password: string }) => {
      handleUpdateUser(formData, {
        onSuccess: () => {
          logout();
        },
      });
    },
  });

  const onCancel = () => {
    formik.resetForm();
    setIsReadOnly(true);
  };
  return (
    <form
      className="flex max-w-[250px] flex-col gap-2 lg:max-w-[unset] lg:gap-4"
      onSubmit={formik.handleSubmit}
    >
      <>
        <div className="flex items-end gap-2">
          <label className="flex flex-col gap-1">
            <LabelText>Update Password</LabelText>
            <HashPasswordInput
              value={isReadOnly ? defaultValue : formik.values.password}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              readOnly={isReadOnly}
              styled="settings"
              aria-required
            />
          </label>
          <UpdateConfirmation
            isReadOnly={isReadOnly}
            onCancel={onCancel}
            setIsReadOnly={setIsReadOnly}
          />
        </div>
        <ErrorMessage>
          {formik.errors.password ? formik.errors.password : ""}
        </ErrorMessage>
      </>
    </form>
  );
}
