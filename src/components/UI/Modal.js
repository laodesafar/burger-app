import ReactDom from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed inset-0 bg-black bg-opacity-70 z-20 w-full min-h-screen"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-20v left-5% w-11/12 bg-white p-4 rounded-2xl shadow-xl z-30 animate-slideDown md:w-200 md:left-cal ">
      <div className="">{props.children}</div>
    </div>
  );
};

const protalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onHide} />,
        protalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElement
      )}
    </Fragment>
  );
};

export default Modal;
