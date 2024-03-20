import { Controller, useFormContext } from "react-hook-form";
import SelectUI from "./SelectUI";

type SelectProps = {
  name: string;
  data: string[];
};

function Select({ name, ...props }: SelectProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <SelectUI {...props} field={field} />}
    />
  );
}

export default Select;
