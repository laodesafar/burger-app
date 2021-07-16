import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: "2",
          price: 22000,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHiddenCart}>
      {cartItems}
      <div className="flex justify-between items-center font-semibold text-2xl my-4 mx-0">
        <span>Total Amount</span>
        <span>44000</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.onHiddenCart}
          className="text-green-400 pointer bg-transparent border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
        >
          Close
        </button>
        <button className="text-white pointer bg-green-400 border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white ">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
