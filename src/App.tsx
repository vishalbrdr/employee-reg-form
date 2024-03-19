import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "./schema/Employee";
import TextInput from "./components/TextInput";

function App() {
  const {
    register,
    formState: { errors },
  } = useForm<EmployeeForm>({
    resolver: yupResolver(EmployeeFormSchema),
  });
  return (
    <div data-theme="nord" className="bg-base-300 h-dvh text-center p-3">
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <form className="grid place-items-center mt-10">
        <TextInput
          label="what is your name?"
          name="name"
          error={errors.name?.message}
          register={register}
        />
        <TextInput
          label="what is your age?"
          name="age"
          type="number"
          error={errors.age?.message}
          register={register}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
