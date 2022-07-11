import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

const [cartIsVisible, setCartIsVisible] = React.useState(false);

function showCartHandler(){
  setCartIsVisible(true);
}

function hideCartHandler(){
  setCartIsVisible(false)
}

  return (
    <CartProvider>
     {cartIsVisible && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
