import * as Yup from "yup";

const passowordSchema = {
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
};

const emailSchema = {
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
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

export const createTaskValidation = Yup.object({
  title: Yup.string().required().min(3).max(255),
  description: Yup.string().max(255),
  isCompleted: Yup.boolean(),
  endDate: Yup.date().required("Required"),
  userId: Yup.number().min(1, "Please choose an employee").required("Required"),
});
