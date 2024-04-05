import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
export type LoginForm = yup.InferType<typeof LoginFormSchema>;
