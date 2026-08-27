import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router";
import {
  validateLoginForm,
  type LoginFormData,
} from "../../utils/validateLoginForm";
import { login } from "../../services/loginService";

const INITIAL_FORM_DATA: LoginFormData = {
  email: "",
  password: "",
};

export default function LoginFormInput() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] =
    useState<LoginFormData>(INITIAL_FORM_DATA);

  const [errors, setErrors] =
    useState<Partial<LoginFormData>>({});

  const [loginError, setLoginError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setLoginError("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setLoginError("");

    const validationErrors =
      validateLoginForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const result = await login(
        formData.email,
        formData.password,
      );

      localStorage.setItem(
        "token",
        result.token,
      );

      localStorage.setItem(
        "user",
        JSON.stringify(result.user),
      );

      const from =
        location.state?.from?.pathname || "/";

      navigate(from, {
        replace: true,
      });
    } catch (error) {
      console.error(error);
      setLoginError("Incorrect email or password.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="h-12 w-full border border-gray-300 px-4 outline-none focus:border-black"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="h-12 w-full border border-gray-300 px-4 outline-none focus:border-black"
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      {loginError && (
        <p className="text-sm text-red-500">
          {loginError}
        </p>
      )}

      <button
        type="submit"
        className="mt-2 h-12 w-full bg-black text-white transition hover:bg-gray-800"
      >
        Login
      </button>

      <p className="mt-2 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}