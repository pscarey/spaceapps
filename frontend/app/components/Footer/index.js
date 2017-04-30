import React from 'react';
import Tagline from './tagline.js';
import {
  blueGrey800, indigo900,
  deepOrangeA400, grey100,
  grey800, grey300, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

function Footer() {
  return (
    <div>
      <Tagline />
      <footer style={{
        height: 150, 
        backgroundColor: '#404040', 
        textAlign: 'center', 
        color: '#ddd', 
        fontWeight: 300
      }}>
        <div style={{height: 5}}/>
        <p style={{width: '70%', margin: '40px auto 0 auto'}}> Built for NASA Space Apps, Sydney 2017 </p>
        <p style={{width: '70%', margin: '15px auto 0 auto'}}>Peter Carey, Hen Chow, Karina Hudson, Jannene Kyytsonen, Esteban Wagner</p>
      </footer>
    </div>
  );
}

export default Footer;
