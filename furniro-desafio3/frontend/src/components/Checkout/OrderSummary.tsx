import { useFormContext } from "react-hook-form";
import { formatPrice } from "../../utils/price";
import { useCartStore } from "../../stores/cart.store";
import type { CheckoutFormData } from "../../../../backend/schemas/checkoutSchema";

export default function OrderSummary() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const total = useCartStore((state) => state.getTotal());

  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <section className="w-full lg:pt-1">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="font-poppins text-[24px] font-medium leading-none text-black">
          Product
        </h2>

        <h2 className="font-poppins text-[24px] font-medium leading-none text-black">
          Subtotal
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-between gap-4"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="truncate font-poppins text-[16px] font-normal leading-none text-[#9F9F9F]">
                {item.name}
              </span>

              <span className="shrink-0 font-poppins text-[16px] font-light leading-none text-black">
                × {item.quantity}
              </span>
            </div>

            <span className="shrink-0 font-poppins text-[16px] font-light leading-none text-black">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="font-poppins text-[16px] font-normal leading-none text-black">
          Subtotal
        </span>

        <span className="shrink-0 font-poppins text-[16px] font-light leading-none text-black">
          {formatPrice(subtotal)}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="font-poppins text-[16px] font-normal leading-none text-black">
          Total
        </span>

        <span className="shrink-0 font-poppins text-[24px] font-bold leading-none text-[#B88E2F]">
          {formatPrice(total)}
        </span>
      </div>

      <div className="mt-8">
        <label className="mb-4 flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            value="bank"
            {...register("paymentMethod")}
            className="mt-[4px] h-3 w-3 shrink-0 accent-black"
          />

          <span className="font-poppins text-[16px] font-medium leading-none text-black">
            Direct bank transfer
          </span>
        </label>

        <p className="mb-5 ml-6 font-poppins text-[16px] font-light leading-none text-[#9F9F9F] text-justify">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>

        <label className="mb-4 flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            value="cash"
            {...register("paymentMethod")}
            className="h-3 w-3 shrink-0 accent-black"
          />

          <span className="font-poppins text-[16px] font-light leading-none text-[#9F9F9F]">
            Direct bank transfer
          </span>
        </label>

        <label className="mb-4 flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            value="cash"
            {...register("paymentMethod")}
            className="h-3 w-3 shrink-0 accent-black"
          />

          <span className="font-poppins text-[16px] font-light leading-none text-[#9F9F9F]">
            Cash On Delivery
          </span>
        </label>

        {errors.paymentMethod && (
          <p className="mb-4 font-poppins text-xs text-red-500">
            {errors.paymentMethod.message}
          </p>
        )}

        <p className="mb-6 font-poppins text-[16px] font-light leading-none text-[#9F9F9F] text-justify">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our{" "}
          <span className="font-poppins text-[16px] font-semibold">
            privacy policy.
          </span>
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="h-[64px] w-full max-w-[318px] rounded-[15px] border border-black px-8 font-poppins text-[16px] transition hover:bg-black hover:text-white"
          >
            Place order
          </button>
        </div>
      </div>
    </section>
  );
}