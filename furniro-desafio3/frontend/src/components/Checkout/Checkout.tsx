import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import CheckoutBanner from "./CheckoutBanner";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../../../backend/schemas/checkoutSchema";

import { useCartStore } from "../../stores/cart.store";

export function CheckoutInput() {
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),

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

  const onSubmit = (data: CheckoutFormData) => {
    if (items.length === 0) {
      toast.error("Seu carrinho está vazio.");
      return;
    }

    console.log("Checkout:", data);

    toast.success("Pedido realizado com sucesso!");

    clearCart();
  };

  return (
    <div className="min-h-screen bg-white">
      <CheckoutBanner />

      <main className="mx-auto w-full max-w-[1280px] px-6 py-12 md:px-10 lg:px-20">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <BillingForm />
            <OrderSummary />
          </form>
        </FormProvider>
      </main>
    </div>
  );
}