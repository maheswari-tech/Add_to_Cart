import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ cartCount }) => {
  return (
    <nav style={styles.nav}>
      <h2>ShopEase</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/cart" style={styles.link}>
          🛒 <span style={styles.badge}>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '15px 5%', background: '#222', color: '#fff', alignItems: 'center' },
  links: { display: 'flex', gap: '20px', alignItems: 'center' },
  link: { color: '#fff', textDecoration: 'none', fontSize: '16px' },
  badge: { background: 'red', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: '12px', marginLeft: '5px' }
};

export default Nav;