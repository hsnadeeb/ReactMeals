import './Cart.css';
import Modal from '../UI/Modal'

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: 'c1', name: 'Biryani', amount: 2, price: 560 }].map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="totalAmount">
        <span>Total Amount</span>
        <span>10000</span>
      </div>
      <div className="button">
        <button className="btnClose">Close</button>
        <button className="btnOrder">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
