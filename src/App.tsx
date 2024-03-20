import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmployeeFormSchema, EmployeeForm } from "./schema/Employee";
import TextInput from "./components/TextInput";
import TextInputArray from "./components/TextInputArray";
import { PrimaryBtn } from "./components/Button";

function App() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    reset,
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
    reset();
  };

  return (
    <div
      data-theme="nord"
      className="bg-base-300 h-dvh flex flex-col items-center text-center p-3"
    >
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid justify-center mt-10 w-[30rem] bg-white py-5 rounded-lg shadow-lg"
      >
        <TextInput
          label="what is your name?"
          error={errors.name?.message}
          register={{ ...register("name") }}
        />
        <TextInput
          label="what is your age?"
          type="number"
          error={errors.age?.message}
          register={{ ...register("age") }}
        />
        <TextInputArray
          control={control}
          register={register}
          error={errors.addresses?.message}
        />
        <PrimaryBtn variant="success" type="submit">
          Register
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default App;
