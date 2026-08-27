import { useNavigate } from "react-router";
import { useCartStore } from "../../stores/cart.store";

export function CheckoutButton() {
  const navigate = useNavigate();

  const isEmpty = useCartStore((s) => s.isEmpty());

  function handleCheckout() {
    if (isEmpty) {
      return;
    }

    navigate("/checkout");
  }

  return (
    <button
      type="button"
      className="w-fit cursor-pointer rounded-2xl border border-black px-14.5 py-3.5 text-[20px] transition hover:scale-102"
      onClick={handleCheckout}
    >
      Checkout
    </button>
  );
}