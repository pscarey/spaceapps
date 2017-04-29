import React from 'react';

function Footer() {
  return (
    <footer style={{
      height: 150, 
      backgroundColor: '#404040', 
      textAlign: 'center', 
      color: '#ddd', 
      fontWeight: 300
    }}>
      <div style={{height: 5}}/>
      <p style={{margin: '40px 0 0 0'}}> Built for NASA Space Apps, Sydney 2017 </p>
      <p style={{margin: '15px 0 0 0'}}>Peter Carey, Hen Chow, Karina Hudson, Jannene Kyytsonen, Esteban Wagner</p>
    </footer>
  );
}

export default Footer;
