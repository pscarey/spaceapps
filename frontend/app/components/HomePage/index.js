import React, { PropTypes } from 'react';
import Page from '../../components/Page';

const ListPoint = props => (
  <div style={{margin: '0 auto', width: 350, height: 60}}>{props.children}</div>
);

class HomePage extends React.Component {
  render() {
    return (
      <Page>
        <div style={{height: 50}}/>
        <h1 style={{width: '100%', textAlign: 'center', fontWeight:400}}>Whats for dinner?</h1>
        <div style={{width: '100%', paddingTop: 40, textAlign: 'center'}}>
          <ListPoint> Point 1 </ListPoint> <br />
          <ListPoint> Point 2 </ListPoint> <br />
          <ListPoint> Point 3 </ListPoint> <br />
          <ListPoint> Point 4 </ListPoint> <br />
        </div>
        
      </Page>
    );
  }
}

export default HomePage;
