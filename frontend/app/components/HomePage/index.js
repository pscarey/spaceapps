import React, { PropTypes } from 'react';
import Page from '../../components/Page';
import Feature from './feature.js';
import Tagline from './tagline.js';
import { Row, Col } from 'react-bootstrap';
import PostcodeForm from '../PostcodeForm';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const ListPoint = props => (
  <div style={{margin: '0 auto', width: 350, height: 60}}>{props.children}</div>
);

const BSMiddle = props => {
  return (
    <Row style={props.style}>
      <Col xs={0} sm={2} md={3} />
      <Col xs={12} sm={8} md={6}>
        {props.children}
      </Col>
      <Col xs={0} sm={2} md={3} />
    </Row>
  );
};

const Spacer = props => { return <div style={{height: props.height}} />};

class HomePage extends React.Component {
  render() {
    return (
      <div style={{margin: '0'}}>
        <div style={{width:'100%', height: 100, backgroundColor: '#0F2364'}}/>

        <BSMiddle style={{backgroundColor: '#0F2364', height: 200}}>
          <h1 style={{width: '100%', textAlign: 'center', fontWeight: 600, fontSize: '4em', color: '#FFFFFF'}}>
            WHAT'S FOR DINNER?
          </h1>
        </BSMiddle>

        <Spacer height="80px" />
        <BSMiddle>
          <h3>If Food Wastage was a country, it would rank third after USA and China as contributors to greenhouse gases It's time for us to do something about food waste!</h3>
        </BSMiddle>

        <Spacer height="50px" />
        <BSMiddle><Feature /></BSMiddle>

        <Spacer height="50px" />
        <BSMiddle>
          <PostcodeForm
            onSubmit={this.onPostcodeSubmit}
          />
        </BSMiddle>

        <Spacer height="150px" />

        <Spacer height="50px" />
        <BSMiddle style={{backgroundColor: '#00008B', margin: '0', padding: '10', textAlign: 'center'}}>
          <Tagline />
        </BSMiddle>


      </div>
    );
  }
}

export default connect()(HomePage);
