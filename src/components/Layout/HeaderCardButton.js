import { useContext } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";

const HeaderCardButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-gray-900 bg-opacity-30 hover:bg-opacity-50 active:bg-opacity-50 cursor-pointer border-none text-white py-3 px-12 flex justify-around items-center rounded-3xl"
    >
      <span className="w-5 h-5 mr-2 animate-bump">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-gray-400 px-4 py-1 ml-4 font-semibold rounded-full">
        3
      </span>
    </button>
  );
};

export default HeaderCardButton;
