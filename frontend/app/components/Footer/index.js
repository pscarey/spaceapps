import React from 'react';

function Footer() {
  return (
    <footer style={{
      height: 100, 
      backgroundColor: '#404040', 
      textAlign: 'center', 
      color: '#ddd', 
      fontWeight: 100
    }}>
      <div style={{height: 5}}/>
      <p style={{margin: '20px 0 10px 0'}}> Built for NASA Space Apps, Sydney 2017 </p>
      <p> TODO Team Names </p>
    </footer>
  );
}

export default Footer;
