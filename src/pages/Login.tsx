import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import LoginFormUI from "../components/LoginForm";
import { LoginFormSchema, LoginForm } from "../schema/Login";
import { Heading1 } from "../components/Heading";

function Login() {
  const methods = useForm<LoginForm>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });

  return (
    <>
      <Heading1>Login Form</Heading1>
      <FormProvider {...methods}>
        <LoginFormUI />
      </FormProvider>
    </>
  );
}

export default Login;
