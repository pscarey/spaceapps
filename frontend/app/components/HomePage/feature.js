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
        <div style={imgStyle}><img src="assets/icons/Pig.svg" width={60} height={60}/></div>
        <div>Nearly 40% of methane gas emissions comes from farm animals</div>

        <Spacer height="40px" />
        <img src="assets/icons/Coins.svg" width={60} height={60} style={imgStyle}/>
        <div>$1,036 of food is thrown away by the average Australian household every year</div>

        <Spacer height="40px" />
        <img src="assets/icons/Deliver.svg" width={60} height={60}/>
        <div>At least 20% of our <strong>carbon footprint</strong> comes from the food we eat every day</div>

        <Spacer height="40px" />
        <img src="assets/icons/Food.svg" width={60} height={60}/>
        <div>Up to 40% of the average household bin is <strong>food</strong></div>

        <Spacer height="40px" />
        <div>
        The right food to eat depends on where you live, seasons, food supply and shortages, to name a few factors. It is now easy to make the right choice and lower your carbon foodprint with our food comparison and recipe finder tool!

        <h2>Take the first steps in making our planet more sustainable by entering your postcode to find out more...</h2>
        </div>
      </div>
    )
  }
}

export default Feature;
