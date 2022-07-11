import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      //finding the index of item present in the cart if item dispatched by action matches item present in the array i.e. its an existing item
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex]; //saving the item in an variable if its an existing one. will store null if not present in the array

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount //adding the amount of the existing item and the item amount dispatched by action
      };
      updatedItems = [...state.items]; //saving the existing items in a new array
      updatedItems[existingCartItemIndex] = updatedItem; //overriding the existing item with the updated name for displaying it only once
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {

    

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price; // deducting the total amount by the price of 1 quantity of the exiting item
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id); //Filtering the items in a new array to remove the entry dispatched through action
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1, //deducting the quantity by 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  function addToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
