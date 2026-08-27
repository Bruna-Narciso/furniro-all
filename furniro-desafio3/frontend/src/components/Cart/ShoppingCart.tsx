import { Link } from "react-router";

import { useCartStore } from "../../stores/cart.store";
import { formatPrice } from "@/utils/price";
import { getImage } from "../../lib/assets";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingCart({
  isOpen,
  onClose,
}: ShoppingCartProps) {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const subtotal = useCartStore((state) => state.getTotal());

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/10"
        onClick={onClose}
      />

      <aside
        className="
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-[746px]
          w-[417px]
          max-w-[90vw]
          flex-col
          bg-white
          shadow-2xl
        "
      >
        <div
          className="
            flex
            h-[92px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[#D9D9D9]
            px-[30px]
          "
        >
          <h2
            className="
              font-poppins
              text-[24px]
              font-semibold
              leading-none
              text-black
            "
          >
            Shopping Cart
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close shopping cart"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
            "
          >
            <img
              src="/CartSideBar/trash.svg"
              alt="Close"
              className="h-5 w-5"
            />
          </button>
        </div>

        <div
          className="
    min-h-0
    flex-1
    overflow-y-auto
    px-[27px]
    py-6
  "
        >
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <p
                className="
          font-poppins
          text-[16px]
          font-normal
          leading-none
          text-[#9F9F9F]
        "
              >
                Your cart is empty.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
          mt-5
          border
          border-[#B88E2F]
          px-6
          py-2
          font-poppins
          text-[13px]
          text-[#B88E2F]
          transition
          hover:bg-[#B88E2F]
          hover:text-white
        "
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-[20px]">
              {items.map((item) => {
                const finalPrice =
                  item.discount > 0
                    ? item.price -
                    (item.price * item.discount) / 100
                    : item.price;

                return (
                  <div
                    key={item.id}
                    className="
              flex
              h-[105px]
              w-[350px]
              items-start
              gap-4
            "
                  >
                    <div
                      className="
                h-[105px]
                w-[108px]
                shrink-0
                overflow-hidden
                rounded-[8px]
                bg-[#F9F1E7]
              "
                    >
                      <img
                        src={getImage(item.image)}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="
                    line-clamp-2
                    font-poppins
                    text-[16px]
                    font-normal
                    leading-none
                    text-black
                  "
                        >
                          {item.name}
                        </h3>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="mt-3 flex h-5 w-5 items-center justify-center"
                        >
                          <img
                            src="/CartSideBar/delete.svg"
                            alt="Remove"
                            className="h-5 w-5"
                          />
                        </button>

                      </div>

                      <div className="mt-2 flex items-center">
                        <span
                          className="
                    font-poppins
                    text-[16px]
                    font-light
                    leading-none
                    text-black
                  "
                        >
                          {item.quantity}
                        </span>

                        <span
                          className="
                    ml-3
                    font-poppins
                    text-[12px]
                    font-light
                    leading-none
                    text-black
                  "
                        >
                          ×
                        </span>

                        <span
                          className="
                    ml-3
                    font-poppins
                    text-[12px]
                    font-medium
                    leading-none
                    text-[#B88E2F]
                  "
                        >
                          {formatPrice(finalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="shrink-0 bg-white">
            <div
              className="
                border-t
                border-[#D9D9D9]
                px-[31px]
                py-5
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    font-poppins
                    text-[16px]
                    font-normal
                    leading-none
                    text-black
                  "
                >
                  Subtotal
                </span>

                <span
                  className="
                    font-poppins
                    text-[16px]
                    font-semibold
                    leading-none
                    text-[#B88E2F]
                  "
                >
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            <div
              className="
                flex
                gap-3
                border-t
                border-[#D9D9D9]
                px-6
                py-5
              "
            >
              <Link
                to="/cart"
                onClick={onClose}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#262626]
                  px-4
                  py-2.5
                  font-poppins
                  text-[13px]
                  text-[#262626]
                  transition
                  hover:bg-[#262626]
                  hover:text-white
                "
              >
                Cart
              </Link>

              <Link
                to="/checkout"
                onClick={onClose}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B88E2F]
                  px-4
                  py-2.5
                  font-poppins
                  text-[13px]
                  text-white
                  transition
                  hover:bg-[#967328]
                "
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}