import Header from './components/Header';
import React, { useState, useEffect } from "react";
import ProductCard from './components/ProductCard';
import SkeletonCard from './components/SkeletonCard';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
      console.log(isLoading)
    }
    fetchProducts();
  }, []);
  // to check is we get all product we need or not yet

  useEffect(() => {
    if (products.length === 20) {
      setLoading(false);
      console.log(isLoading)
    }
  }, [products]);

  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <div className='flex flex-row flex-wrap justify-evenly mb-10'>
        
          {isLoading
            ? Array.from(Array(20)).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : products.slice(0, 20).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
