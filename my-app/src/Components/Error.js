import React from 'react';
import '../App.css'

const errorMsg = () => {
  function refresh() {
    return window.location.reload()
  }

  return (
    <div style={{ color: 'red', marginTop: '10px' }}>
      <h3>Country not found</h3>
      <button className='refreshBtn' onClick={refresh}>Reset</button>
    </div>
  );
};

export default errorMsg;