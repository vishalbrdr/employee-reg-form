import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import LoginFormUI from "../components/LoginForm";
import { LoginFormSchema, LoginForm } from "../schema/Login";
import { Heading1 } from "../components/Heading";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import useQuery from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const { user } = useAuthStore();
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    (async () => {
      const username = query.get("username");
      const code = query.get("code");
      if (!username || !code) return;

      toast.loading("verifying please wait", { id: "verify" });

      try {
        await axios.post("http://localhost:3000/verfy-signup", {
          username,
          code,
        });
        toast.success(
          "Account verified successfully, please login to continue",
          { duration: 4000 }
        );
      } catch (error) {
        toast.error("Invalid or expired verification link");
      } finally {
        toast.dismiss("verify");
        navigate("/login");
      }
    })();
  }, []);

  const methods = useForm<LoginForm>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
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
