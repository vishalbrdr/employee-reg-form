import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "./schema/Employee";
import TextInput from "./components/TextInput";
import AddressInput from "./components/EmployeeRegForm/AddressInput";
import { PrimaryBtn } from "./components/Button";

function App() {
  const methods = useForm<EmployeeForm>({
    resolver: yupResolver(EmployeeFormSchema),
    defaultValues: {
      name: "",
      age: 0,
      addresses: [{ address: "", type: "home" }],
    },
  });

  const onSubmit: SubmitHandler<EmployeeForm> = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <div
      data-theme="nord"
      className="bg-base-300 h-dvh flex flex-col items-center text-center p-3"
    >
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid justify-center mt-10 w-[30rem] bg-white py-5 rounded-lg shadow-lg"
        >
          <TextInput name="name" label="what is your name?" />
          <TextInput name="age" label="what is your age?" type="number" />
          <AddressInput />
          <PrimaryBtn variant="success" className="mt-4" type="submit">
            Register
          </PrimaryBtn>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
