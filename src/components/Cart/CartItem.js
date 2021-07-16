const CartItem = (props) => {
  const price = `Rp. ${props.price}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-green-400 py-4 px-0 my-4 mx-0 ">
      <div>
        <h2 className="mr-2 text-gray-500">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-semibold text-green-400">{price}</span>
          <span className="font-semibold border-2 border-solid border-gray-500 py-1 px-3 rounded-md text-gray-700">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          className="font-semibold text-xl text-green-400 border-2 border-solid border-green-400 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-green-400 hover:text-white "
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-semibold text-xl text-green-400 border-2 border-solid border-green-400 w-12 text-center rounded-md bg-transparent cursor-pointer ml-4 m-1 hover:bg-green-400 hover:text-white "
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
