import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { EmployeeForm } from "../schema/Employee";

type TextInputArrayProps = {
  control: Control<EmployeeForm>;
  register: UseFormRegister<EmployeeForm>;
  error?: string;
};

function TextInputArray({ control, register, error }: TextInputArrayProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  return (
    <div>
      <div className="label">
        <span className="label-text">Address</span>
      </div>
      <div className="flex gap-4">
        <ul className="grid gap-4">
          {fields.map((item, index) => {
            return (
              <li key={item.id} className="flex gap-4 items-start">
                <div>
                  <input
                    className={`input input-bordered souter max-w-xs ${
                      error && "border-error"
                    }`}
                    {...register(`addresses.${index}.address`, {
                      required: true,
                    })}
                  />
                  <div className="label h-6">
                    {error && (
                      <span className="label-text-alt text-error">
                        {"Address is required"}
                      </span>
                    )}
                  </div>
                </div>
                <select
                  className="select select-bordered max-w-xs"
                  {...register(`addresses.${index}.type`)}
                >
                  <option value="home">home</option>
                  <option value="work">work</option>
                </select>
                {index > 0 ? (
                  <button
                    type="button"
                    className="btn text-white btn-circle btn-error btn-sm mt-2"
                    onClick={() => remove(index)}
                  >
                    &#10005;
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary btn-circle text-white btn-sm mt-2"
                    onClick={() => append({ address: "", type: "home" })}
                  >
                    &#10010;
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TextInputArray;
