import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const amountInputRef = React.useRef();
  const [amountIsValid, setAmountIsValid] = React.useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //Returned current value is always a string
    const enteredAmountInNumber = +enteredAmount; //converting to number for arithmetic operations
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return; // breaking the execution in case either of the conditions (empty, <1 character, >5 characters) above in if statement satisfies
    }
    props.onAddToCart(enteredAmountInNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid Amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
