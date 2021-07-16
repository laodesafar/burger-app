const Input = (props) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-semibold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-12 rounded-md border-solid border-0 border-blue-400 pl-2 "
        {...props.input}
      />
    </div>
  );
};

export default Input;
