import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import TextInput from "../TextInput";
import EmployeeFormAddressInput from "./AddressInput";
import { PrimaryBtn } from "../Button";

function EmployeeRegForm() {
  const { reset, handleSubmit } = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid justify-center mt-10 w-[30rem] bg-white py-5 rounded-lg shadow-lg"
    >
      <TextInput name="name" label="what is your name?" />
      <TextInput name="age" label="what is your age?" type="number" />
      <EmployeeFormAddressInput />
      <PrimaryBtn variant="success" className="mt-4" type="submit">
        Register
      </PrimaryBtn>
    </form>
  );
}

export default EmployeeRegForm;
