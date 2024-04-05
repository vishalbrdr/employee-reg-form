import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import TextInput from "../TextInput";
import { PrimaryBtn } from "../Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ImageInput from "../ImageInput";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

function EmployeeRegForm() {
  const { reset, handleSubmit } = useFormContext();
  const [imageUrl, setImageUrl] = useState({
    url: "/user-icon.jpg",
    key: "",
  });
  const navigate = useNavigate();

  const imageInputPorps = { imageUrl, setImageUrl };
  const { user } = useAuthStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = axios.post<any>(
      "https://6grbfzvkq8.execute-api.ap-south-1.amazonaws.com/signup",
      { ...data, picture: imageUrl.key }
    );

    toast.promise(res, {
      loading: "Regitering... please wait",
      success:
        "Registration Successfull, we've sent you an email to verify your account",
      error: "Registration Failed, please try again",
    });
    res.finally(() => {
      reset();
      setImageUrl({ url: "/user-icon.jpg", key: "" });
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-5 mt-10 w-[30rem] bg-white py-5 gap-2 rounded-lg shadow-lg"
    >
      <ImageInput {...imageInputPorps} />
      <TextInput name="name" label="Enter FullName" />
      <TextInput name="email" label="Enter Email" />
      <TextInput name="username" label="Enter username" />
      <TextInput name="password" label="Enter password" type="text" />
      <PrimaryBtn variant="success" className="mt-4" type="submit">
        Register
      </PrimaryBtn>
      <div>
        Already registered?{" "}
        <Link className="link" to={"/login"}>
          Login
        </Link>
      </div>
    </form>
  );
}

export default EmployeeRegForm;
