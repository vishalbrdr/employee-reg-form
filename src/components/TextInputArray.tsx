import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { EmployeeForm } from "../schema/Employee";
import { SecondaryBtn } from "./Button";
import TextInput from "./TextInput";
import { Select } from "./Select";

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
        <ul className="grid">
          {fields.map((item, index) => {
            return (
              <li key={item.id} className="flex gap-2 items-start">
                <div>
                  <TextInput
                    register={{
                      ...register(`addresses.${index}.address`),
                    }}
                    error={error}
                  />
                  <div className="label min-h-6">
                    {error && (
                      <span className="label-text-alt text-error">
                        {"Address is required"}
                      </span>
                    )}
                  </div>
                </div>
                <Select
                  register={{ ...register(`addresses.${index}.type`) }}
                  data={["home", "work"]}
                />
                {index > 0 ? (
                  // render remove button if there is more than one address
                  <SecondaryBtn variant="error" onClick={() => remove(index)}>
                    &#10005; {/* unicode for cross */}
                  </SecondaryBtn>
                ) : (
                  // render add button if its the first address
                  <SecondaryBtn
                    onClick={() => append({ address: "", type: "home" })}
                  >
                    &#10010; {/* unicode for plus */}
                  </SecondaryBtn>
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
