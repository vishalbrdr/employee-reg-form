import { useFieldArray, useFormContext } from "react-hook-form";
import { SecondaryBtn } from "../Button";
import TextInput from "../TextInput";
import Select from "../Select";
import LabelText from "../LabelText";

function AddressInput() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  return (
    <div>
      <LabelText>Address</LabelText>
      <div className="">
        <ul className="grid gap-4">
          {fields.map((item, index) => {
            return (
              <li key={item.id} className="flex gap-2 items-start">
                <div>
                  <TextInput name={`addresses.${index}.address`} />
                </div>
                <Select
                  name={`addresses.${index}.type`}
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

export default AddressInput;
