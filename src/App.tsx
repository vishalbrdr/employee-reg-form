import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "./schema/Employee";
import TextInput from "./components/TextInput";
import TextInputArray from "./components/TextInputArray";

function App() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<EmployeeForm>({
    resolver: yupResolver(EmployeeFormSchema),
    defaultValues: {
      name: "",
      age: 18,
      addresses: [{}],
    },
  });

  const onSubmit: SubmitHandler<EmployeeForm> = (data) => {
    console.log(data);
  };

  return (
    <div data-theme="nord" className="bg-base-300 h-dvh text-center p-3">
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid place-items-center mt-10"
      >
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

        <TextInputArray control={control} register={register} />

        <button type="submit" className="btn mt-5 rounded-lg px-10 btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
