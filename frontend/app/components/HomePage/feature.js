import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

// const BSMiddle = props => {
//   return (
//     <Row>
//       <Col xs={2} md={4} />
//       <Col xs={8} md={4}>
//         {props.children}
//       </Col>
//       <Col xs={2} md={4} />
//     </Row>
//   );
// };

const Spacer = props => { return <div style={{height: props.height}} />};


class Feature extends React.Component {
  render(){
    let background = "http://www.foodwise.com.au/wp-content/uploads/2012/08/Background_ChoppingBoard2.jpg"
    let style = {
      fontSize: '1.5em',
      lineHeight: '30px'
      // backgroundImage: `url(${background})`
    };

    return (
      <div style={style}>
        <Spacer height="40px" />
        <div>Aussies throw out $8 billion of edible food every year</div>

        <Spacer height="40px" />
        <div>$1,036 of food is thrown away by the average Australian household every year</div>

        <Spacer height="40px" />
        <div>Australians discard up to 20% of the food they purchase. This equates to 1 out of every 5 bags of groceries they buy</div>

        <Spacer height="40px" />
        <div>Up to 40% of the average household bin is FOOD</div>
      </div>
    )
  }
}

export default Feature;
