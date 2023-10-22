import { useContext } from 'react';
import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <div className="cart-item-details">
            <button
              className="minus-button"
              onClick={() => {
                cartCtx.removeItem(item.id);
              }}
            >
              -
            </button>
            <span className="item-quantity">{item.amount}</span>
            <button
              className="plus-button"
              onClick={() => {
                cartCtx.addItem({ ...item, amount: 1 });
              }}
            >
              +
            </button>
          </div>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <div className="cart">
        {cartItems}
        <div className="totalAmount">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="button">
          <button className="btnClose" onClick={props.onCloseCart}>
            Close
          </button>
          {hasItems && <button className="btnOrder">Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
