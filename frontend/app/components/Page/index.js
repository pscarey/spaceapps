import React from 'react';
import Footer from '../Footer';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div style={{minHeight: '100%', height: '100%'}}>
          {this.props.children}
        </div>   
        <Footer />   
      </div>
    );
  }
}

export default Page;