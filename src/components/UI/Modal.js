import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return <div className={classes.modal}>
      <div>{props.children}</div>
  </div>;
}

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
}

export default Modal;
