import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid =
      !isEmpty(enteredPostalCode) && isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const isCssInvalid = "border-red-500";
  const isCssValid =
    "border-gray-700  focus:border-green-500 hover:border-green-500";
  const nameInvalidClasses = !formInputValidity.name
    ? isCssInvalid
    : isCssValid;
  const streetInvalidClasses = !formInputValidity.street
    ? isCssInvalid
    : isCssValid;
  const postalCodeInvalidClasses = !formInputValidity.postalCode
    ? isCssInvalid
    : isCssValid;
  const cityInvalidClasses = !formInputValidity.city
    ? isCssInvalid
    : isCssValid;

  return (
    <form className="my-4 h-full overflow-auto" onSubmit={confirmHandler}>
      <div className="mb-2">
        <label className="font-semibold mb-1 block" htmlFor="name">
          Your Name
        </label>
        <input
          className={`${
            !formInputValidity.name && nameInvalidClasses
          } focus:outline-none focus:shadow-outline  border-solid border-2 rounded-lg w-80 py-1 px-2 max-w-full`}
          type="text"
          name="name"
          id="name"
          ref={nameInputRef}
        />
        {!formInputValidity.name && (
          <p className="text-red-500">Please enter a valid Name</p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-semibold mb-1 block" htmlFor="street">
          Street
        </label>
        <input
          className={`${
            !formInputValidity.street && streetInvalidClasses
          } focus:outline-none focus:shadow-outline  border-solid border-2 rounded-lg w-80 py-1 px-2 max-w-full`}
          type="text"
          name="street"
          id="street"
          ref={streetInputRef}
        />
        {!formInputValidity.street && (
          <p className="text-red-500">Please enter a valid Street</p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-semibold mb-1 block" htmlFor="postal">
          Postal Code
        </label>
        <input
          className={`${
            !formInputValidity.postalCode && postalCodeInvalidClasses
          } focus:outline-none focus:shadow-outline  border-solid border-2 rounded-lg w-80 py-1 px-2 max-w-full`}
          type="text"
          name="postal"
          id="postal"
          ref={postalCodeInputRef}
        />
        {!formInputValidity.postalCode && (
          <p className="text-red-500">Please enter a valid Postl Code</p>
        )}
      </div>
      <div className="mb-2">
        <label className="font-semibold mb-1 block" htmlFor="city">
          City
        </label>
        <input
          className={`${
            !formInputValidity.city && cityInvalidClasses
          } focus:outline-none focus:shadow-outline  border-solid border-2 rounded-lg w-80 py-1 px-2 max-w-full`}
          type="text"
          name="city"
          id="city"
          ref={cityInputRef}
        />
        {!formInputValidity.city && (
          <p className="text-red-500">Please enter a valid City</p>
        )}
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="text-green-400 pointer bg-transparent border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white "
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className="text-white pointer bg-green-400 border-solid border-2 border-green-400 py-2 px-8 rounded-3xl ml-4 hover:bg-green-700 hover:border-green-700 hover:text-white">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
