import { useFormContext } from "react-hook-form";

import type { CheckoutFormData } from "../../../../backend/schemas/checkoutSchema";

type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  erro?: boolean;
};

export default function BillingForm() {
  const {
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  async function searchZipCode(zipCode: string) {
    const cleanZipCode = zipCode.replace(/\D/g, "");

    if (cleanZipCode.length !== 8) {
      return;
    }

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanZipCode}/json/`,
      );

      if (!response.ok) {
        throw new Error("Erro ao consultar o CEP.");
      }

      const data: ViaCepResponse = await response.json();

      if (data.erro) {
        setError("zipCode", {
          type: "manual",
          message: "CEP não encontrado.",
        });

        setValue("country", "");
        setValue("street", "");
        setValue("city", "");
        setValue("province", "");

        return;
      }

      clearErrors("zipCode");

      setValue("country", "Brazil", {
        shouldValidate: true,
        shouldDirty: true,
      });

      setValue("street", data.logradouro, {
        shouldValidate: true,
        shouldDirty: true,
      });

      setValue("city", data.localidade, {
        shouldValidate: true,
        shouldDirty: true,
      });

      setValue("province", data.uf, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);

      setError("zipCode", {
        type: "manual",
        message: "Não foi possível consultar o CEP.",
      });
    }
  }

  return (
    <section className="w-full">
      <h2 className="mb-[52px] font-poppins text-[36px] font-semibold leading-none text-black">
        Billing details
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
            >
              First Name
            </label>

            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
            />

            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
            >
              Last Name
            </label>

            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
            />

            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Company Name (Optional)
          </label>

          <input
            id="company"
            type="text"
            {...register("company")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.company && (
            <p className="mt-1 text-xs text-red-500">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            ZIP code
          </label>

          <input
            id="zipCode"
            type="text"
            placeholder="00000-000"
            maxLength={9}
            {...register("zipCode", {
              onChange: (event) => {
                searchZipCode(event.target.value);
              },
            })}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.zipCode && (
            <p className="mt-1 text-xs text-red-500">
              {errors.zipCode.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Country / Region
          </label>

          <input
            id="country"
            type="text"
            {...register("country")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] bg-gray-50 px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.country && (
            <p className="mt-1 text-xs text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="street"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Street address
          </label>

          <input
            id="street"
            type="text"
            {...register("street")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] bg-gray-50 px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.street && (
            <p className="mt-1 text-xs text-red-500">
              {errors.street.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Town / City
          </label>

          <input
            id="city"
            type="text"
            {...register("city")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] bg-gray-50 px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.city && (
            <p className="mt-1 text-xs text-red-500">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="province"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Province
          </label>

          <input
            id="province"
            type="text"
            {...register("province")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] bg-gray-50 px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.province && (
            <p className="mt-1 text-xs text-red-500">
              {errors.province.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalAddress"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Add-on address
          </label>

          <input
            id="additionalAddress"
            type="text"
            {...register("additionalAddress")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.additionalAddress && (
            <p className="mt-1 text-xs text-red-500">
              {errors.additionalAddress.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-poppins text-[16px] font-medium leading-none text-black"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            {...register("email")}
            className="h-[42px] w-full rounded-[4px] border border-[#9F9F9F] px-3 text-[13px] outline-none focus:border-[#B88E2F]"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            id="additionalInformation"
            {...register("additionalInformation")}
            rows={1}
            placeholder="Additional information"
            className="min-h-[42px] w-full resize-none rounded-[4px] border border-[#9F9F9F] px-3 py-3 text-[12px] outline-none placeholder:text-[#9F9F9F] focus:border-[#B88E2F] mb-[160px]"
          />

          {errors.additionalInformation && (
            <p className="mt-1 text-xs text-red-500">
              {errors.additionalInformation.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}