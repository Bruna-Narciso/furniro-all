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

  const onSubmit = () => {
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full max-w-[528.75px] flex-col"
    >
      <div className="mb-[36px]">
        <label
          htmlFor="name"
          className="mb-[22px] block font-poppins text-[16px] font-medium leading-none text-[#000000]"
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
          className={`h-[75px] w-full rounded-[10px] border bg-white px-4 font-poppins text-[16px] text-black outline-none transition placeholder:text-[#9F9F9F] focus:border-[#B88E2F] ${errors.name
              ? "border-red-500"
              : "border-[#9F9F9F]"
            }`}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="mb-[36px]">
        <label
          htmlFor="email"
          className="mb-[22px] block font-poppins text-[16px] font-medium leading-none text-[#000000]"
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
          className={`h-[75px] w-full rounded-[10px] border bg-white px-4 font-poppins text-[16px] text-black outline-none transition placeholder:text-[#9F9F9F] focus:border-[#B88E2F] ${errors.email
              ? "border-red-500"
              : "border-[#9F9F9F]"
            }`}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-[36px]">
        <label
          htmlFor="subject"
          className="mb-[22px] block font-poppins text-[16px] font-medium leading-none text-[#000000]"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          placeholder="This is an optional"
          {...register("subject")}
          className="h-[75px] w-full rounded-[10px] border border-[#9F9F9F] bg-white px-4 font-poppins text-[16px] text-black outline-none transition placeholder:text-[#9F9F9F] focus:border-[#B88E2F]"
        />
      </div>

      <div className="mb-[40px]">
        <label
          htmlFor="message"
          className="mb-[22px] block font-poppins text-[16px] font-medium leading-none text-[#000000]"
        >
          Message
        </label>

        <textarea
          id="message"
          placeholder="Hi! I'd like to ask about"
          {...register("message", {
            required: "Mensagem é obrigatória",
          })}
          className={`h-[120px] w-full resize-none rounded-[10px] border bg-white px-4 py-4 font-poppins text-[16px] text-black outline-none transition placeholder:text-[#9F9F9F] focus:border-[#B88E2F] ${errors.message
              ? "border-red-500"
              : "border-[#9F9F9F]"
            }`}
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="h-[55px] w-[237px] rounded-[5px] border border-[#B88E2F] bg-[#B88E2F] font-poppins text-[16px] font-normal leading-none text-white transition hover:bg-[#a17b26] active:scale-[0.98]"
      >
        Submit
      </button>
    </form>
  );
}