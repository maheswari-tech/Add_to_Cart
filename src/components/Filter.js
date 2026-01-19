import React from 'react';

const Filter = ({ onSearch, onCategoryChange }) => {
  const categories = ["All", "vehicle", "laptops", "mobile-accessories", "smartphones", "sports-accessories"];

  return (
    <div style={styles.filterBar}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        style={styles.input}
      />
      
      <select 
        onChange={(e) => onCategoryChange(e.target.value)} 
        style={styles.select}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    background: '#f8f9fa',
    borderBottom: '1px solid #ddd',
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  select: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  }
};

export default Filter;