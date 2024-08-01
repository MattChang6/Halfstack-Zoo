import React from 'react';
import '../stylesShop.css';

export function Shop() {
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
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img className='cheetah' src={require('./images/cheetahStuff.jpeg')} alt='Cheetah'/>
          <h2>Cheetah Stuffy</h2>
            <p>$49.99</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
          <img className='batStuff' src={require('./images/batStuff.jpg')} alt='Bat Stuffy'/>
          <h2>Cheetah Stuffy</h2>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
      </main>
     
    </div>
  );
}

