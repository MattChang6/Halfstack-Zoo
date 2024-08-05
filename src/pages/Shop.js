import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/stylesShop.css';

export function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    // Convert cart items to query parameters
    const queryParams = new URLSearchParams();
    cart.forEach((item, index) => {
      queryParams.append(`item${index}_name`, item.name);
      queryParams.append(`item${index}_price`, item.price);
    });

    navigate(`/checkout?${queryParams.toString()}`);
  };

  return (
    <div className="shop">
      <header>
        <h1>M&N Shop</h1>
      </header>
      <main>
        <div className="product">
          <img className='teddy' src={require('./images/teddyStuff.jpg')} alt='Bear' />
          <h2>Teddy Bear Stuffy</h2>
          <p>$19.99</p>
          <button onClick={() => handleAddToCart({ name: 'Teddy Bear Stuffy', price: 19.99 })}>Add to Cart</button>
        </div>

        <div className="product">
          <img className='cheetah' src={require('./images/cheetahStuff.jpeg')} alt='Cheetah' />
          <h2>Cheetah Stuffy</h2>
          <p>$49.99</p>
          <button onClick={() => handleAddToCart({ name: 'Cheetah Stuffy', price: 49.99 })}>Add to Cart</button>
        </div>

        <div className="product">
          <img className='batStuff' src={require('./images/batStuff.jpg')} alt='Bat Stuffy' />
          <h2>Bat Stuffy</h2>
          <p>$39.99</p>
          <button onClick={() => handleAddToCart({ name: 'Bat Stuffy', price: 39.99 })}>Add to Cart</button>
        </div>
      </main>

      <footer>
        <button onClick={handleCheckout}>Go to Checkout</button>
      </footer>
    </div>
  );
}
