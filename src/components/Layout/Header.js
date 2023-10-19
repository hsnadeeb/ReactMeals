import React from 'react';
import './Header.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Header = (props) => {

  const cartCtx = useContext(CartContext);

  const cartItemCount = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  },0)

  const openCartHandler = () => {
    // Set the cart to open when the button in the header is clicked
    props.onOpenCart();
  };

  return (
    <header>
      <h1>ReactMeals</h1>
      <div className="cart-button">
        <button onClick={openCartHandler}>Cart</button>
        <span className="cart-item-count">{cartItemCount}</span>
      </div>
    </header>
  );
};

export default Header;
