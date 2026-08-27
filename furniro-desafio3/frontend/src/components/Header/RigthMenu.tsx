import clsx from "clsx";
import { Link } from "react-router";
import { useState } from "react";

import LogoutButton from "../Login/LogoutButton";
import CartButton from "./CartButton";
import ShoppingCart from "../Cart/ShoppingCart";

type RightMenuProps = {
  className?: string;
};

const RightMenu = ({ className }: RightMenuProps) => {
  const [showLogout, setShowLogout] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const LinkHover =
    "hover:cursor-pointer hover:scale-110 transition";

  return (
    <>
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
              onClick={() =>
                setShowLogout((previous) => !previous)
              }
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
        <CartButton
          onClick={() => setIsCartOpen(true)}
        />
      </div>

      {/* SIDEBAR DO CARRINHO */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default RightMenu;