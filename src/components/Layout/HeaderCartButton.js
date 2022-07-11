import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = React.useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = React.useState(false);
  const { items } = cartCtx; //Destructuring Context as we want effect to run and render only when items in the cart change and not when the entire context changes

  const cartItemsCount = items.reduce((currentCount, item) => {
    return currentCount + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const buttonClassTimer = setTimeout(() => {
      setButtonIsHighlighted(false); //Adding a timer of 300 ms as we want class bump to be removed once animation has worked for once.
    }, 300);

    return () => {
      clearTimeout(buttonClassTimer); //Cleanup function to ensure timer gets cleared reducing the burden on JS engine also for the scenario if user rapidly hits add to cart button, the old timer needs to be cleaned and new timer will start
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
}

export default HeaderCartButton;
