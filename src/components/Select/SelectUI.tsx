import { ControllerRenderProps, FieldValues } from "react-hook-form";
type SelectUIProps = {
  field: ControllerRenderProps<FieldValues, string>;
  data: string[];
};

function SelectUI({ data, field }: SelectUIProps) {
  return (
    <select {...field} className="select select-bordered max-w-xs">
      {data.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
}

export default SelectUI;
