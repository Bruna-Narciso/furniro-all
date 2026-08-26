import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form:", data);

    alert("Mensagem enviada com sucesso!");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col"
    >
      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2 block text-[10px] font-medium text-black"
        >
          Your name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Abc"
          {...register("name", {
            required: "Nome é obrigatório",
          })}
          className={`h-[50px] w-full rounded-[5px] border px-4 text-[10px] text-black outline-none transition placeholder:text-gray-300 focus:border-[#B88E2F] ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />

        {errors.name && (
          <p className="mt-1 text-[9px] text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-[10px] font-medium text-black"
        >
          Email address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Abc@def.com"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Digite um e-mail válido",
            },
          })}
          className={`h-[50px] w-full rounded-[5px] border px-4 text-[10px] text-black outline-none transition placeholder:text-gray-300 focus:border-[#B88E2F] ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />

        {errors.email && (
          <p className="mt-1 text-[9px] text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="mb-2 block text-[10px] font-medium text-black"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          placeholder="This is an optional"
          {...register("subject")}
          className="h-[50px] w-full rounded-[5px] border border-gray-300 px-4 text-[10px] text-black outline-none transition placeholder:text-gray-300 focus:border-[#B88E2F]"
        />
      </div>

      {/* Message */}
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] font-medium text-black"
        >
          Message
        </label>

        <textarea
          id="message"
          placeholder="Hi! I'd like to ask about"
          {...register("message", {
            required: "Mensagem é obrigatória",
          })}
          className={`h-[85px] w-full resize-none rounded-[5px] border px-4 py-4 text-[10px] text-black outline-none transition placeholder:text-gray-300 ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:border-[#B88E2F]`}
        />

        {errors.message && (
          <p className="mt-1 text-[9px] text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="h-[40px] w-[105px] rounded-[3px] bg-[#B88E2F] text-[10px] font-medium text-white transition hover:bg-[#a17b26] active:scale-[0.98]"
      >
        Submit
      </button>
    </form>
  );
}