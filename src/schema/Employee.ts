import * as yup from "yup";
export const EmployeeFormSchema = yup.object().shape({
  name: yup.string().required().min(3).max(16),
  age: yup.number().required().positive().integer().min(18).max(59),
  addresses: yup.array().of(
    yup
      .object({
        address: yup.string().required(),
        type: yup.string().oneOf(["home", "work"]).required(),
      })
      .required()
  ),
});

export type EmployeeForm = yup.InferType<typeof EmployeeFormSchema>;
