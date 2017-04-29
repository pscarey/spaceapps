import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    return (
      <div>
        <div style={{minHeight: '100%', height: '100%'}}>
          { this.props.children }
        </div>   
        <Footer />   
      </div>
    );
  }
}

export default connect()(Page);
