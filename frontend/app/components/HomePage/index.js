import React, { PropTypes } from 'react';
import Page from '../../components/Page';
import Feature from './feature.js';
import { Row, Col } from 'react-bootstrap';
import PostcodeForm from '../PostcodeForm';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {
  blueGrey800, indigo900,
  deepOrangeA400, grey100,
  grey800, grey300, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import Card from 'material-ui/Card';
import YouTube from 'react-youtube';

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
      <div style={{margin: '0', width:'100%'}}>

        <BSMiddle style={{backgroundColor: '#0F2364', height: 250}}>
          <div style={{lineHeight: '250px', textAlign: 'center', height: 250}}>
            <h1 style={{width: '90%', textAlign: 'center', fontWeight: 600, fontSize: '4em', color: white, display: 'inline-block', verticalAlign: 'middle'}}>
              WHAT'S FOR DINNER?
            </h1>
          </div>
        </BSMiddle>

        <Spacer height="50px" />
        <BSMiddle style={{margin: '0 30px 0 30px', textAlign: 'center'}}>
          <h3 style={{fontWeight: 400}}>If <strong style={{color: deepOrangeA400}}>food wastage</strong> was a country, it would rank third after USA and China as a contributor to greenhouse gases.</h3>
          <h3 style={{fontWeight: 400}}>It's time for us to <strong>do something</strong> about food waste!</h3>
        </BSMiddle>
        <Spacer height="30px" />
        <BSMiddle style={{margin: '0 10px 0 10px'}}>
          <Feature />
        </BSMiddle>    

        <Spacer height="30px" />
        <BSMiddle style={{margin: '0 10px 0 10px'}}>
          <Card style={{width: 200, margin: '0 auto'}}>
            <PostcodeForm
              onSubmit={this.onPostcodeSubmit}
            />
          </Card>
        </BSMiddle>
        <Spacer height="50px" />
        <BSMiddle
          style={{textAlign: 'center'}}
        >
          <h4>OR</h4>
          <Spacer height="50px" />
          <h4 style={{fontWeight: 400}}>
            Find out more by watching this video from <a href="http://www.adcouncil.org/">Ad Council</a>:
          </h4>
          <Card
            style={{padding: '0 0 -5px 0', margin: 10}}
          >
            <YouTube
              videoId={"WREXBUZBrS8"}
              opts={{
                width: '100%',
              }}
            />
          </Card>
        </BSMiddle>
        <Spacer height="100px" />
      </div>
    );
  }
}

export default connect()(HomePage);
