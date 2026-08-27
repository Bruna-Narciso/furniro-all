import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../../../backend/schemas/checkoutSchema";
import { useCartStore } from "../../stores/cart.store";
import Benefits from "../Benefits/Benefits";

export function CheckoutInput() {
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      zipCode: "",
      country: "",
      street: "",
      city: "",
      province: "",
      additionalAddress: "",
      email: "",
      additionalInformation: "",
      paymentMethod: undefined,
    },
  });

const onSubmit = () => {
  if (items.length === 0) {
    toast.error("Seu carrinho está vazio.");
    return;
  }

  toast.success("Pedido realizado com sucesso!");
  clearCart();
};

  const onError = () => {
    toast.error("Please fill in all required fields.");
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-20">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit, onError)}
            className="
              grid
              grid-cols-1
              gap-16
              lg:grid-cols-2
              lg:gap-20
            "
          >
            <BillingForm />

            <div className="w-full min-w-0">
              <OrderSummary />
            </div>
          </form>
        </FormProvider>
      </main>

      <Benefits />
    </div>
  );
}