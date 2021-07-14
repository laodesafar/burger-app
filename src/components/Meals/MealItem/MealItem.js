const MealItem = (props) => {
  const price = `Rp ${props.price.toFixed(3)}`;
  return (
    <li className="flex justify-between m-4 pb-4 border-b-2 border-solid border-gray-300">
      <div>
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-blue-500 text-xl">{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
