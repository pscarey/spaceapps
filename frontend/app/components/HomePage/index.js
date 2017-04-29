import React, { PropTypes } from 'react';
import Page from '../../components/Page';
import { Row, Col } from 'react-bootstrap';
import PostcodeForm from '../PostcodeForm';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const ListPoint = props => (
  <div style={{margin: '0 auto', width: 350, height: 60}}>{props.children}</div>
);

const BSMiddle = props => {
  return (
    <Row>
      <Col xs={2} md={4} />
      <Col xs={8} md={4}> 
        {props.children}
      </Col>
      <Col xs={2} md={4} />
    </Row>
  );
};

const Spacer = props => { return <div style={{height: props.height}} />};

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{height: 100}}/>

        <BSMiddle>
          <h1 style={{width: '100%', textAlign: 'center', fontWeight: 600, color: '#000'}}>
            What's for dinner?
          </h1>
        </BSMiddle>

        <Spacer height="100px" />
        <BSMiddle>Point 1</BSMiddle>

        <Spacer height="50px" />
        <BSMiddle>Point 2</BSMiddle>

        <Spacer height="50px" />
        <BSMiddle>Point 3</BSMiddle>

        <Spacer height="50px" />
        <BSMiddle>Point 4</BSMiddle>

        <Spacer height="50px" />
        <BSMiddle>
          <PostcodeForm 
            onSubmit={this.onPostcodeSubmit}
          />
        </BSMiddle>

        <Spacer height="150px" />

      </div>
    );
  }
}

export default connect()(HomePage);
