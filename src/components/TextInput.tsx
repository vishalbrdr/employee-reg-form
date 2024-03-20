import { UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  register: UseFormRegisterReturn;
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
};

function TextInput({
  register,
  label,
  error,
  type,
  placeholder,
}: TextInputProps) {
  return (
    <label className="form-control w-full max-w-xs">
      {/* label of the forminput */}
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        type={type || "text"}
        placeholder={placeholder || "Type here"}
        {...register}
        className={`input input-bordered w-full max-w-xs ${
          error && "input-error"
        }`}
      />
      <div className="label h-6">
        {error && <span className="label-text-alt text-error">{error}</span>}
      </div>
    </label>
  );
}

export default TextInput;
