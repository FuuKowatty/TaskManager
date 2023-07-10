import * as Yup from "yup";

const passowordSchema = {
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
};

const emailSchema = {
  email: Yup.string().email("Invalid email address").required("Required"),
};

export const loginValidationSchema = Yup.object({
  ...emailSchema,
  ...passowordSchema,
});

export const createUserValidation = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Surname must be at least 2 characters")
    .required("Required"),
  ...emailSchema,
  ...passowordSchema,
  role: Yup.string().required("Required"),
});
