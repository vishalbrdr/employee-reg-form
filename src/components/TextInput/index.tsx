import { Controller, useFormContext } from "react-hook-form";
import TextInputUI from "./TextInputUI";

type TextInputProps = {
  placeholder?: string;
  name: string;
  label?: string;
  type?: string;
};

function TextInput({ name, ...props }: TextInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextInputUI {...props} field={field} error={error?.message} />
      )}
    />
  );
}

export default TextInput;
