import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  field: string;
  namee: Path<T>;
  placeholder: string;
  regex: RegExp;
  regexMsg: string;
  requiredMsg: string;
  minLength: number;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  mode: string;
};

export default function Input<T extends FieldValues>({
  field,
  namee,
  placeholder,
  regex,
  regexMsg,
  requiredMsg,
  minLength,
  errors,
  register,
  mode,
}: InputProps<T>) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label htmlFor={String(namee)} className="text-[#232323]">
        {field}
      </label>

      <input
        className="shadow-sm rounded-md border hover:border-gray-300 focus:outline-none focus:shadow-md p-3 px-4 bg-inherit text-gray-500"
        type={mode === "password" ? "password" : "text"}
        placeholder={placeholder}
        id={String(namee)}
        {...register(namee, {
          pattern: {
            value: regex,
            message: regexMsg,
          },
          required: requiredMsg,
          minLength: {
            value: minLength,
            message: `Minimum length is ${minLength} characters`,
          },
        })}
      />

      <p className="pl-2 text-red-500">
        {errors[namee]?.message as string | undefined}
      </p>
    </div>
  );
}
