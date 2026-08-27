import clsx from "clsx";
import { useCartStore } from "../../stores/cart.store";

type CartButtonProps = {
  onClick: () => void;
};

export default function CartButton({
  onClick,
}: CartButtonProps) {
  const totalItems = useCartStore(
    (state) => state.getTotalItems(),
  );

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir carrinho"
      className={clsx(
        "relative",
        "hover:cursor-pointer hover:scale-110 transition",
      )}
    >
      <img
        src="/Icons/shop.svg"
        alt="Ícone do carrinho"
        className="max-h-[22.05px]"
      />

      {totalItems > 0 && (
        <span
          className="
            absolute
            -right-3
            -top-3
            flex
            h-4.5
            w-4.5
            items-center
            justify-center
            rounded-full
            bg-over-secundary
            text-xs
            font-bold
            text-white
          "
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}