import React, { useState } from 'react';
import data from '../assets/cards.json';
import Filter from './Filter';

const Home = ({ addToCart }) => {
  // Flattening data: Extracting products from all cart objects in JSON
  const allProducts = data.carts.flatMap(cart => cart.products);
  const [filteredItems, setFilteredItems] = useState(allProducts);

  const handleSearch = (query) => {
    const filtered = allProducts.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleCategory = (category) => {
    if (category === "All") {
      setFilteredItems(allProducts);
    } else {
      const filtered = allProducts.filter(item => 
        item.thumbnail.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      <Filter onSearch={handleSearch} onCategoryChange={handleCategory} />
      <div style={{ padding: '0 5%' }}>
        <div style={styles.grid}>
          {filteredItems.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.thumbnail} alt={product.title} style={styles.img} />
              <h4 style={styles.title}>{product.title}</h4>
              <p style={styles.price}>${product.price.toLocaleString()}</p>
              <button style={styles.btn} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' },
  card: { border: '1px solid #ddd', borderRadius: '12px', padding: '15px', textAlign: 'center', background: '#fff' },
  img: { width: '100%', height: '120px', objectFit: 'contain' },
  title: { fontSize: '0.9rem', margin: '10px 0', height: '40px', overflow: 'hidden' },
  price: { fontWeight: 'bold', color: '#27ae60' },
  btn: { background: '#007bff', color: '#fff', border: 'none', padding: '8px', borderRadius: '5px', cursor: 'pointer', width: '100%' }
};

export default Home;