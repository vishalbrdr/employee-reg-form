import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import TextInput from "../TextInput";
import { PrimaryBtn } from "../Button";
import axios from "axios";
import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import toast from "react-hot-toast";
import { LoginApiOutput } from "../../utils/types/LoginApiOutput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

function LoginForm() {
  const { reset, handleSubmit } = useFormContext();
  const query = useQuery();
  const navigate = useNavigate();
  const { user, setUser } = useAuthStore();

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      toast.loading("logging in... please wait", { id: "login" });
      const res = await axios.post<LoginApiOutput>(
        "http://localhost:3000/login",
        data
      );
      toast.success(`Welcome ${res.data.user.name}`);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      toast.error("Invalid username or password");
      console.log(error);
    } finally {
      toast.dismiss("login");
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 mt-10 w-[30rem] bg-white py-5 gap-2 rounded-lg shadow-lg"
    >
      <TextInput name="username" label="Enter username" />
      <TextInput name="password" label="Enter password" type="text" />
      <PrimaryBtn variant="success" className="mt-4" type="submit">
        Login
      </PrimaryBtn>
      <div>
        don't have an account?{" "}
        <Link className="link" to="/register">
          register
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
