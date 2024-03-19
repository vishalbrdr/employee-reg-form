import { UseFormRegister, useFormState } from "react-hook-form";
import { EmployeeForm } from "../schema/Employee";

type TextInputProps = {
  register: UseFormRegister<EmployeeForm>;
  label: string;
  name: "name" | "age";
  error?: string;
  type?: string;
};

function TextInput({
  register,
  label,
  name,
  error,
  type = "text",
}: TextInputProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder="Type here"
        {...register(name)}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="label h-6">
        {error && <span className="label-text-alt text-error">{error}</span>}
      </div>
    </label>
  );
}

export default TextInput;
