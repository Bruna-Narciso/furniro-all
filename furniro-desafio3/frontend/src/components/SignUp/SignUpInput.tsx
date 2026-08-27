import type { ChangeEvent } from "react";
import type { SignUpFormData } from "../../utils/validateSignUpForm";

interface SignUpInputProps {
  id: keyof SignUpFormData;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpInput({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
}: SignUpInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="h-12 w-full rounded-md border border-gray-300 px-4 text-sm outline-none placeholder:text-gray-500 focus:border-black bg-[#D9D9D9]"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}