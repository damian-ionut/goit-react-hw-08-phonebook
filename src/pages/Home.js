import React, { useState } from 'react';

export default function Home() {
  const [textVisible, setTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setTextVisible(!textVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {textVisible && (
        <h1
          style={{
            fontSize: '36px',
            color: 'black',
          }}
        >
          Welcome to my App!
        </h1>
      )}
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onClick={toggleTextVisibility}
      >
        {textVisible ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
  );
}
