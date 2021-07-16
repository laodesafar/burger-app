import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className="text-right">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="cursor-pointer bg-green-400 border-2 border-solid border-green-400 text-white py-1 px-8 rounded-2xl font-semibold hover:text-green-700 hover:border-green-700">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
