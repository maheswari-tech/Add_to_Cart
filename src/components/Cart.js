import React from 'react';

const Cart = ({ cart, updateQty }) => {
  // Calculate Grand Total dynamically
  const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '40px 10%' }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={styles.itemRow}>
              <img src={item.thumbnail} alt={item.title} style={styles.thumb} />
              
              <div style={{ flex: 2, paddingLeft: '20px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
                <p style={{ margin: 0, color: '#666' }}>Unit Price: ${item.price.toLocaleString()}</p>
              </div>

              <div style={styles.controls}>
                <button style={styles.qtyBtn} onClick={() => updateQty(item.id, -1)}>-</button>
                <span style={{ margin: '0 15px', fontWeight: 'bold' }}>{item.quantity}</span>
                <button 
                  style={styles.qtyBtn} 
                  onClick={() => updateQty(item.id, 1)} 
                  disabled={item.quantity >= 10}
                >+</button>
              </div>

              <div style={{ flex: 1, textAlign: 'right' }}>
                <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}

          <div style={styles.totalSection}>
            <h2>Grand Total: <span style={{ color: '#27ae60' }}>${grandTotal.toLocaleString()}</span></h2>
            <button style={styles.checkoutBtn}>Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  itemRow: { display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' },
  thumb: { width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eee' },
  controls: { display: 'flex', alignItems: 'center', background: '#f9f9f9', padding: '5px 15px', borderRadius: '20px' },
  qtyBtn: { border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' },
  totalSection: { marginTop: '30px', textAlign: 'right', borderTop: '2px solid #333', paddingTop: '20px' },
  checkoutBtn: { background: '#28a745', color: '#fff', border: 'none', padding: '12px 40px', fontSize: '18px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }
};

export default Cart;