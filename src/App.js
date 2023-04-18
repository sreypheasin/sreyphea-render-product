import Header from './components/Header';
import React, { useState, useEffect } from "react";
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <div className='flex flex-row flex-wrap justify-evenly mb-10'>
          {products.slice(0,20).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
