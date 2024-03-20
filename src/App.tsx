import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "./schema/Employee";
import EmployeeRegForm from "./components/EmployeeRegForm";

function App() {
  const methods = useForm<EmployeeForm>({
    resolver: yupResolver(EmployeeFormSchema),
    defaultValues: {
      name: "",
      age: 0,
      addresses: [{ address: "", type: "home" }],
    },
  });

  return (
    <div
      data-theme="nord"
      className="bg-base-300 h-dvh flex flex-col items-center text-center p-3"
    >
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <FormProvider {...methods}>
        <EmployeeRegForm />
      </FormProvider>
    </div>
  );
}

export default App;
