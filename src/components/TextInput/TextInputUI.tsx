import {
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";

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
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
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
