import { useFormik } from "formik";
import * as Yup from "yup";

import { ErrorMessage } from "@/components/form/ErrorMessage";

import { updatePasswordSchema } from "@/lib/validation";


import { LabelText } from "./LabelText";
import { HashPasswordInput } from "./HashPasswordInput";
import { useUpdatePassword } from "@/hooks/api/useUpdatePassword";
import { UpdatePassword } from "@/types/users";
import { ButtonForm } from "../button/ButtonForm";
import { getErrorMessage } from "@/lib/getErrorMessage";


export function UpdatePasswordForm() {
  const { mutate: handleUpdateUser, error,isSuccess } = useUpdatePassword();
  const responseError = getErrorMessage(error);
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newPasswordConfirmation: "",
      oldPassword: ""
    },
    validationSchema: Yup.object( updatePasswordSchema ),
    onSubmit: async(passowrds: UpdatePassword) => {
      handleUpdateUser(passowrds)
    }
  });

  return (
    <div className="max-w-[256px]">
    <h2 className="text-xl font-bold">Update Password</h2>
    <form
      className="flex max-w-[250px] flex-col lg:max-w-[unset]"
      onSubmit={formik.handleSubmit}
    >
          <div className="text-green-600 font-bold min-h-[10px]">
            {isSuccess && "SUCCESS"}
          </div>
        <div className="flex flex-col items-end gap-2">
          <label className="flex flex-col gap-1">
            <LabelText>New Password</LabelText>
            <HashPasswordInput
              name="newPassword"
              value={formik.values.newPassword}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              styled="settings"
              placeholder="My new secret password"
              aria-required
            />
          </label>
          <ErrorMessage>
            {formik.errors.newPassword && formik.touched.newPassword ? formik.errors.newPassword : ""}
          </ErrorMessage>
          
        </div>
        <div className="flex flex-col items-end gap-2">
          <label className="flex flex-col gap-1">
            <LabelText>New Password Confirmation</LabelText>
            <HashPasswordInput
              name="newPasswordConfirmation"
              value={formik.values.newPasswordConfirmation}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              styled="settings"
              placeholder="My new secret password"
              aria-required
            />
          </label>
          <ErrorMessage>
            {formik.errors.newPasswordConfirmation && formik.touched.newPasswordConfirmation ? formik.errors.newPasswordConfirmation : ""}
          </ErrorMessage>
        </div>        
        <div className="flex flex-col items-end gap-2">
          <label className="flex flex-col gap-1">
            <LabelText>Old Password</LabelText>
            <HashPasswordInput
              name="oldPassword"
              value={formik.values.oldPassword}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="My secret password"
              styled="settings"
              aria-required
            />
          </label>
          <ErrorMessage>
          {formik.errors.oldPassword && formik.touched.oldPassword
            ? formik.errors.oldPassword
            : responseError && responseError.type === "password"
            ? responseError.message
            : ""}
          </ErrorMessage>
        </div>
        <ButtonForm>Update Password</ButtonForm>
    </form>
    </div>
  );
}
