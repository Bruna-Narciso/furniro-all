import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import SignUpInput from "./SignUpInput";
import {
  validateSignUpForm,
  type SignUpFormData,
} from "../../utils/validateSignUpForm";
import { signUp } from "../../services/authService";



const INITIAL_FORM_DATA: SignUpFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState<SignUpFormData>(INITIAL_FORM_DATA);

  const [errors, setErrors] =
    useState<Partial<SignUpFormData>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateSignUpForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await signUp(formData);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-5"
    >
      <SignUpInput
        id="firstName"
        label="First Name"
        value={formData.firstName}
        error={errors.firstName}
        onChange={handleChange}
      />

      <SignUpInput
        id="lastName"
        label="Last Name"
        value={formData.lastName}
        error={errors.lastName}
        onChange={handleChange}
      />

      <SignUpInput
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        error={errors.email}
        onChange={handleChange}
      />

      <SignUpInput
        id="password"
        label="Password"
        type="password"
        value={formData.password}
        error={errors.password}
        onChange={handleChange}
      />

      <SignUpInput
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Sign up
      </button>
    </form>
  );
}