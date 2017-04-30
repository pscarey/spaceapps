import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Card from 'material-ui/Card';
import { Row, Col } from 'react-bootstrap';

class MarketsPrompt extends React.Component {  
  render() {
    return (
        <Row>
            <Col xs={1} sm={3} md={4}/>
            <Col xs={10} sm={6} md={4}>
            <Card style={{width: '100%', textAlign: 'center', margin: '50px auto 50px auto', padding: '20px 25px 10px 25px'}}>
                <div style={{textAlign: 'center', margin: '0 auto 5px auto', width: 150}}> 
                    <img src="assets/icons/Pig.svg" width={50} height={50}/> 
                    <img src="assets/icons/Chicken.svg" width={50} height={50}/> 
                    <img src="assets/icons/Food.svg" width={50} height={50}/> 
                </div>
                <p>Why not check out your local farmers markets? 
                It's the best way to get cheap, sustainable produce.
                Find out more <a href="http://sydneymarkets.com.au/">here!</a></p>
            </Card>
            </Col>
            <Col xs={1} sm={3} md={4}/>
        </Row>
    );
  }
}

export default connect()(MarketsPrompt);



