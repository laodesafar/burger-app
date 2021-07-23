import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = "Rp. " + cartCtx.totalAmount;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-47dc7-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const modalAction = (
    <div className="text-right">
      <button
        onClick={props.onHiddenCart}
        className="text-green-400 pointer bg-transparent border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
      >
        Close
      </button>
      {hasItem && (
        <button
          onClick={orderHandler}
          className="text-white pointer bg-green-400 border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
        >
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className="flex justify-between items-center font-semibold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onHiddenCart}
        />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = (
    <p className="text-blue-500">Sending order data...</p>
  );

  const didSubmitModalContent = (
    <React.Fragment>
      <p className="text-green-400">Successfully send the order</p>
      <div className="text-right">
        <button
          onClick={props.onHiddenCart}
          className="text-green-400 pointer bg-transparent border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
        >
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHide={props.onHiddenCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
