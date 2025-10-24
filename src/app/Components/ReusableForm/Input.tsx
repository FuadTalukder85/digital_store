import { TInputTypes } from "@/Types/Types";
import { FieldError } from "react-hook-form";

export default function Input({
  label,
  required,
  type,
  placeholder,
  defaultValue,
  register,
  error,
}: TInputTypes) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <p className="label-text pb-1 mt-2">
          {label} {required && <span className="text-red-500 text-lg">*</span>}
        </p>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register}
        className="w-full py-2 px-3 rounded-sm bg-[#00ccff17] border border-white"
      />
      {error && (
        <small className="text-red-500">{(error as FieldError)?.message}</small>
      )}
    </div>
  );
}
