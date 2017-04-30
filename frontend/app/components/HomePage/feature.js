import React, { PropTypes } from 'react';
import Card from 'material-ui/Card';

const Spacer = props => { return <div style={{height: props.height}} />};

const imgStyle = {
  textAlign: 'center',
  margin: '0 auto 5px auto'
};

const Point = props => {
  return (
      <Card style={{padding: 20, textAlign: 'center', lineHeight: '30px', margin: '0 40px 0 40px'}}>
        <div style={imgStyle}><img src={"assets/icons/" + props.icon + ".svg"} width={60} height={60}/></div>
        <div style={{fontSize: '1.2em', fontWeight: '200'}}>{props.children}</div>
      </Card>
  );
}

class Feature extends React.Component {
  render(){

    return (
      <div style={{}}>
        <Spacer height="40px" />
        <Point icon="Coins">
          $1,036 of food is thrown away by the average Australian household every year.
        </Point>
        
        <Spacer height="40px" />
        <Point icon="Cow">
          Nearly 40% of methane gas emissions comes from farm animals
        </Point>

        <Spacer height="40px" />
        <Point icon="Deliver">
          At least 20% of our <strong>carbon footprint</strong> comes from the food we eat every day.
        </Point>

        <Spacer height="40px" />
        <Point icon="Trash">
          Up to 40% of the average household bin is <strong>food</strong>.
        </Point>

        <Spacer height="40px" />
        <div style={{textAlign: 'center', margin: '0 60px 0 60px'}}>
        <h4 style={{fontWeight: 400}}>
          It's hard to know exactly what goes into your food, and sustainable food depends on where you live, seasons, food supply and shortages.
        </h4><br />
        <h4 style={{fontWeight: 400}}>
          Make the right choice and <strong>lower your carbon foodprint</strong> with our recipe finder tool!
        </h4><br />
        <div style={{textAlign: 'center', margin: 10}}>
          <img width="150" height="150" src="/assets/icons/Globe.svg"/>
        </div>
        <h3 style={{fontWeight: 400}}>
          Enter your postcode to take the first step in making our planet more sustainable:
        </h3>
        </div>
      </div>
    )
  }
}

export default Feature;
