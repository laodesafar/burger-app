import { Fragment } from "react";

import HeaderCardButton from "./HeaderCardButton";

import mealsImage from "../Meals/assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-20 bg-yellow-900 text-white flex justify-between items-center px-20 z-10 shadow-lg     ">
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className="w-full h-96 z-0 overflow-hidden">
        <img
          className="w-full  object-cover "
          src={mealsImage}
          alt="A Table full if delicius food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
