import React,{useState} from 'react';
import './Header.css';

const Header=()=>{

    const [cartItemCount, setCartItemCount] = useState(0);

    return (
      <header>
        <h1>ReactMeals</h1>
        <div className="cart-button">
          <button>Cart</button>
          <span className="cart-item-count">{cartItemCount}</span>
        </div>
      </header>
    )
}

export default Header;