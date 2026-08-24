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
        <h2 className="text-[20px] font-medium text-black">
          Product
        </h2>

        <h2 className="text-[20px] font-medium text-black">
          Subtotal
        </h2>
      </div>

      {/* Produtos */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#9F9F9F]">
                {item.name}
              </span>

              <span className="text-[12px] text-black">
                × {item.quantity}
              </span>
            </div>

            <span className="text-[13px] text-black">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[13px] text-black">
          Subtotal
        </span>

        <span className="text-[13px] text-black">
          {formatPrice(subtotal)}
        </span>
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[13px] font-medium text-black">
          Total
        </span>

        <span className="text-[20px] font-semibold text-[#B88E2F]">
          {formatPrice(total)}
        </span>
      </div>

      {/* Payment */}
      <div className="mt-8">
        <label className="mb-4 flex cursor-pointer items-start gap-3">
          <input
            type="radio"
            value="bank"
            {...register("paymentMethod")}
            className="mt-[3px] h-3 w-3 accent-black"
          />

          <span className="text-[13px] font-medium text-black">
            Direct bank transfer
          </span>
        </label>

        <p className="mb-5 ml-6 text-[11px] leading-[1.6] text-[#9F9F9F]">
          Make your payment directly into our bank account.
          Please use your Order ID as the payment reference.
          Your order won't be shipped until the funds have
          cleared in our account.
        </p>

        <label className="mb-4 flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            value="cash"
            {...register("paymentMethod")}
            className="h-3 w-3 accent-black"
          />

          <span className="text-[13px] text-[#9F9F9F]">
            Cash On Delivery
          </span>
        </label>

        {errors.paymentMethod && (
          <p className="mb-4 text-xs text-red-500">
            {errors.paymentMethod.message}
          </p>
        )}

        <p className="mb-6 text-[11px] leading-[1.6] text-[#9F9F9F]">
          Your personal data will be used to support your
          experience throughout this website, to manage access
          to your account, and for other purposes described in
          our privacy policy.
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="min-w-[160px] rounded-[8px] border border-black px-8 py-3 text-[13px] text-black transition hover:bg-black hover:text-white"
          >
            Place order
          </button>
        </div>
      </div>
    </section>
  );
}