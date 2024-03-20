import { UseFormRegisterReturn } from "react-hook-form";

type SelectProps = {
  register: UseFormRegisterReturn;
  data: string[];
};

function Select({ register, data }: SelectProps) {
  return (
    <select className="select select-bordered max-w-xs" {...register}>
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

export { Select };
