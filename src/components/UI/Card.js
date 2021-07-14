const Card = (props) => {
  return (
    <div className="p-4 shadow-lg rounded-2xl bg-blue-400 bg-opacity-10">
      {props.children}
    </div>
  );
};

export default Card;
