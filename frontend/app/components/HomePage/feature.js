import React, { PropTypes } from 'react';

const Spacer = props => { return <div style={{height: props.height}} />};

class Feature extends React.Component {
  render(){
    let imgStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto'
    };

    return (
      <div style={{fontSize: '1.5em', lineHeight: '30px'}}>
        <Spacer height="40px" />
        <div style={imgStyle}><img src="assets/icons/Food.svg" width={50} height={50}/></div>
        <div>Aussies throw out $8 billion of edible food every year</div>

        <Spacer height="40px" />
        <img src="assets/icons/Coins.svg" width={50} height={50} style={imgStyle}/>
        <div>$1,036 of food is thrown away by the average Australian household every year</div>

        <Spacer height="40px" />
        <img src="assets/icons/Food.svg" width={50} height={50}/>
        <div>Australians discard up to 20% of the food they purchase. This equates to 1 out of every 5 bags of groceries they buy</div>

        <Spacer height="40px" />
        <img src="assets/icons/Globe.svg" width={50} height={50}/>
        <div>Up to 40% of the average household bin is <strong>food</strong></div>
      </div>
    )
  }
}

export default Feature;
