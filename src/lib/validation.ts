import * as Yup from "yup";

const TRIM_ERROR_MESSAGE = "space hack, nice try!";
const PASSWORD_MIN_LENGTH_ERROR = "Password must be at least 6 characters";
const REQUIRED_ERROR = "This field is required";
const NAME_MIN_LENGTH_ERROR = "Name must be at least 2 characters";
const SURNAME_MIN_LENGTH_ERROR = "Surname must be at least 2 characters";
const TITLE_MIN_LENGTH_ERROR = "Title must be at least 3 characters";
const TITLE_MAX_LENGTH_ERROR = "Title must be less than 255 characters";
const DESCRIPTION_MAX_LENGTH_ERROR = "Description must be less than 255 characters";
const DESCRIPTION_MIN_LENGTH_ERROR = "Description must be at least 3 characters";
const USERID_MIN_ERROR = "Please choose an employee";
const EMAIL_FORMAT_ERROR = "Invalid email format";

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


export const passowordSchema = {
  password: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(6, PASSWORD_MIN_LENGTH_ERROR)
    .required(REQUIRED_ERROR),
};

export const updatePasswordSchema = {
  newPassword: passowordSchema.password,
  newPasswordConfirmation: passowordSchema.password,
  oldPassword: passowordSchema.password,
};

export const emailSchema = {
  email: Yup.string()
    .strict(true)
    .matches(emailRegex, EMAIL_FORMAT_ERROR)
    .required(REQUIRED_ERROR),
};

export const loginValidationSchema = Yup.object({
  ...emailSchema,
  ...passowordSchema,
});

export const userValidation = Yup.object({
  firstName: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(2, NAME_MIN_LENGTH_ERROR)
    .matches(/^[a-zA-Z]+$/, 'First name must contain only alphabetic characters')
    .required(REQUIRED_ERROR),
  lastName: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(2, SURNAME_MIN_LENGTH_ERROR)
    .matches(/^[a-zA-Z]+$/, 'Last name must contain only alphabetic characters')
    .required(REQUIRED_ERROR),
  ...emailSchema,
  ...passowordSchema,
  role: Yup.string().required(REQUIRED_ERROR),
});

export const userUpdateValidation = Yup.object({
  firstName: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(2, NAME_MIN_LENGTH_ERROR)
    .matches(/^[a-zA-Z]+$/, 'First name must contain only alphabetic characters')
    .required(REQUIRED_ERROR),
  lastName: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(2, SURNAME_MIN_LENGTH_ERROR)
    .matches(/^[a-zA-Z]+$/, 'Last name must contain only alphabetic characters')
    .required(REQUIRED_ERROR),
  ...emailSchema,
  role: Yup.string().required(REQUIRED_ERROR),
});

export const taskValidation = Yup.object({
  title: Yup.string()
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .required(REQUIRED_ERROR)
    .min(3, TITLE_MIN_LENGTH_ERROR)
    .max(255, TITLE_MAX_LENGTH_ERROR),
  description: Yup.string()
    .required(REQUIRED_ERROR)
    .trim(TRIM_ERROR_MESSAGE)
    .strict(true)
    .min(3, DESCRIPTION_MIN_LENGTH_ERROR)
    .max(255, DESCRIPTION_MAX_LENGTH_ERROR),
  endDate: Yup.date().required(REQUIRED_ERROR),
  assignedTo: Yup.number().min(1, USERID_MIN_ERROR).required(REQUIRED_ERROR),
});