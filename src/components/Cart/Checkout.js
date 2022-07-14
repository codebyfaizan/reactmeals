import React from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixDigits = (value) => value.trim().length === 6;
const isTenDigits = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = React.useState({
    name: true,
    house: true,
    area: true,
    city: true,
    state: true,
    pincode: true,
    phone: true,
  });

  const nameInputRef = React.useRef();
  const houseInputRef = React.useRef();
  const areaInputRef = React.useRef();
  const cityInputRef = React.useRef();
  const stateInputRef = React.useRef();
  const pincodeInputRef = React.useRef();
  const phoneInputRef = React.useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredHouse = houseInputRef.current.value;
    const enteredArea = areaInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredHouseIsValid = !isEmpty(enteredHouse);
    const enteredAreaIsValid = !isEmpty(enteredArea);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStateIsValid = !isEmpty(enteredState);
    const enteredPincodeIsValid = isSixDigits(enteredPincode);
    const enteredPhoneIsValid = isTenDigits(enteredPhone);

    setFormInputsValidity({
      name: enteredNameIsValid,
      house: enteredHouseIsValid,
      area: enteredAreaIsValid,
      city: enteredCityIsValid,
      state: enteredStateIsValid,
      pincode: enteredPincodeIsValid,
      phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredHouseIsValid &&
      enteredAreaIsValid &&
      enteredCityIsValid &&
      enteredStateIsValid &&
      enteredPincodeIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const houseControlClasses = `${classes.control} ${
    formInputsValidity.house ? "" : classes.invalid
  }`;
  const areaControlClasses = `${classes.control} ${
    formInputsValidity.area ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const stateControlClasses = `${classes.control} ${
    formInputsValidity.state ? "" : classes.invalid
  }`;
  const pincodeControlClasses = `${classes.control} ${
    formInputsValidity.pincode ? "" : classes.invalid
  }`;
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.phone ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="Your Name">Your Name*</label>
        <input type="text" id="Your Name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please Enter Valid Name!!!</p>}
      </div>
      <div className={houseControlClasses}>
        <label htmlFor="House No, Building Name">
          House No, Building Name*
        </label>
        <input
          type="text"
          id="House No, Building Name"
          ref={houseInputRef}
        ></input>
        {!formInputsValidity.house && (
          <p>Please Enter Valid House No, Building Name</p>
        )}
      </div>
      <div className={areaControlClasses}>
        <label htmlFor="Road Name, Area, Colony">
          Road Name, Area, Colony*
        </label>
        <input
          type="text"
          id="Road Name, Area, Colony"
          ref={areaInputRef}
        ></input>
        {!formInputsValidity.area && (
          <p>Please Enter Valid Road Name, Area, Colony!!!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="City">City*</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please Enter Valid City!!!</p>}
      </div>
      <div className={stateControlClasses}>
        <label htmlFor="State">State*</label>
        <input type="text" id="State" ref={stateInputRef}></input>
        {!formInputsValidity.state && <p>Please Enter Valid State!!!</p>}
      </div>
      <div className={pincodeControlClasses}>
        <label htmlFor="Pincode">Pincode*</label>
        <input type="number" id="Pincode" ref={pincodeInputRef}></input>
        {!formInputsValidity.pincode && (
          <p>Please Enter Valid 6 digit Pincode!!!</p>
        )}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="Phone Number">Phone Number*</label>
        <input type="number" id="Phone Number" ref={phoneInputRef}></input>
        {!formInputsValidity.phone && (
          <p>Please Enter Valid 10 digit Phone Number!!!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="Mandatory Fields" className={classes.mandatory}>
          *Mandatory Fields
        </label>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
