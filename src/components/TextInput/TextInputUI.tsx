import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import LabelText from "../LabelText";

type TextInputUIProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  field: ControllerRenderProps<FieldValues, string>;
  error?: string;
};

function TextInputUI({
  label,
  type,
  placeholder,
  field,
  error,
}: TextInputUIProps) {
  return (
    <label className="form-control w-full max-w-xs">
      <LabelText>{label}</LabelText>
      <input
        {...field}
        type={type || "text"}
        placeholder={placeholder || "Type here"}
        className={`input input-bordered w-full max-w-xs ${
          error ? "input-error" : ""
        }`}
      />
      <ErrorMessage error={error} />
    </label>
  );
}

export default TextInputUI;
