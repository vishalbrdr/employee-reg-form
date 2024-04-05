import * as yup from "yup";
export const EmployeeFormSchema = yup.object().shape({
  name: yup.string().min(3).max(16).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),

  username: yup.string().required().max(16),
});

export type EmployeeForm = yup.InferType<typeof EmployeeFormSchema>;
