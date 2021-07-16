import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rp ${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between m-4 pb-4 border-b-2 border-solid border-gray-300">
      <div>
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-blue-500 text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
