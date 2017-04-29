import React from 'react';
import {
  blueGrey800, indigo900,
  deepOrangeA400, grey100,
  grey800, grey300, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

class Tagline extends React.Component {
  render(){
    return (
      <div style={{backgroundColor: deepOrangeA400, margin: '0', padding: '10px', textAlign: 'center', height: 120}}>
        <h2 style={{margin: 'auto', color: white, lineHeight: '100px'}}>Think global, live local.</h2>
      </div>
    )
  }
}

export default Tagline;
