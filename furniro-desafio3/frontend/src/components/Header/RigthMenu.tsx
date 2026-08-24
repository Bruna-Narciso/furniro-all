import clsx from "clsx";
import { Link } from "react-router";
import { useState } from "react";

import { useCartStore } from "../../stores/cart.store";
import LogoutButton from "../Login/LogoutButton";

type RightMenuProps = {
  className?: string;
};

const RightMenu = ({ className }: RightMenuProps) => {
  const totalItems = useCartStore((s) => s.getTotalItems());

  const [showLogout, setShowLogout] = useState(false);

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const LinkHover =
    "hover:cursor-pointer hover:scale-110 transition";

  return (
    <div
      className={clsx(
        "flex items-center gap-[33.66px]",
        className,
      )}
    >

      {/* USUÁRIO */}
      {user ? (
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowLogout((previous) => !previous)}
            className={clsx(
              "flex items-center gap-2",
              LinkHover,
            )}
          >
            <img
              src="/Icons/alert.svg"
              alt="Ícone de usuário"
              className="max-h-[22px]"
            />

            <span>{user.firstName}</span>
          </button>

          {showLogout && (
            <div className="absolute right-0 top-8 z-50 bg-white p-3 shadow-md">
              <LogoutButton />
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className={clsx(LinkHover)}
        >
          <img
            src="/Icons/alert.svg"
            alt="Fazer login"
            className="max-h-[22px]"
          />
        </Link>
      )}

      {/* CARRINHO */}
      <Link
        to="/cart"
        className={clsx(
          LinkHover,
          "relative",
        )}
      >
        <img
          src="/Icons/shop.svg"
          alt="Ícone do carrinho"
          className="max-h-[22.05px]"
        />

        {totalItems > 0 && (
          <span
            className={clsx(
              "absolute -right-3 -top-3",
              "flex h-4.5 w-4.5 items-center justify-center",
              "rounded-full",
              "bg-over-secundary",
              "text-xs font-bold text-white",
            )}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default RightMenu;