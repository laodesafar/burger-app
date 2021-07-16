import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";

const HeaderCardButton = (props) => {
  const [btnHighl, setBtnHighl] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighl(true);

    const timer = setTimeout(() => {
      setBtnHighl(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onClick}
      className={`${
        btnHighl ? "animate-bump" : ""
      } bg-gray-900  bg-opacity-30 hover:bg-opacity-50 active:bg-opacity-50 cursor-pointer border-none text-white py-3 px-12 flex justify-around items-center rounded-3xl`}
    >
      <span className="w-5 h-5 mr-2 ">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-gray-400 px-4 py-1 ml-4 font-semibold rounded-full">
        {numberOfCartItem}
      </span>
    </button>
  );
};

export default HeaderCardButton;
