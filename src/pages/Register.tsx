import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "../schema/Register";
import EmployeeRegForm from "../components/RegistrationForm";

function Register() {
  const methods = useForm<EmployeeForm>({
    resolver: yupResolver(EmployeeFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Sign Up Form</h1>
      <FormProvider {...methods}>
        <EmployeeRegForm />
      </FormProvider>
    </>
  );
}

export default Register;
