import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = "Rp. " + cartCtx.totalAmount;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHiddenCart}>
      {cartItems}
      <div className="flex justify-between items-center font-semibold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.onHiddenCart}
          className="text-green-400 pointer bg-transparent border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
        >
          Close
        </button>
        {hasItem && (
          <button className="text-white pointer bg-green-400 border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white ">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
