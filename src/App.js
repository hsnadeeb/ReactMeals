import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const meals = [
    { name: 'Butter Chicken', description: 'Tender chicken in a creamy tomato sauce', price: 1000 },
    { name: 'Biryani', description: 'Fragrant rice dish with spices and choice of meat', price: 1200 },
    { name: 'Paneer Tikka', description: 'Grilled Indian cheese with spices', price: 1500 },
    { name: 'Palak Paneer', description: 'Spinach and Indian cheese in a spiced sauce', price: 1800 },
    { name: 'Tandoori Naan', description: 'Oven-baked flatbread', price: 2000 },
  ];

  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      <Summary />
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}

      <div className="meals">
        {meals.map((meal, index) => (
          <Meals
            key={index}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </div>
    </CartProvider>
  );
}

export default App;
