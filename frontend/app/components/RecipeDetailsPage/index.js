import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Row, Col } from 'react-bootstrap';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Dimensions from 'react-dimensions'
import StarRatingComponent from 'react-star-rating-component';
import MarketsPrompt from '../MarketsPrompt';

const scoreDescriptions = [
    'Entirely unsustainable - avoid!',
    'OK occasionally, but not part of your weekly shop!',
    'Good as a treat, once or twice a week.',
    'This meal is great for the environment - make it a staple!',
    'As good as it gets - one of the most sustainable recipes.'
];

const metricDescriptions = {
    co2Rating : 'CO2 Emissions',
    waterRating : 'Water Usage',
    energyRating : 'Energy Usage',
    daysToProduceRating : 'Production Time',
    distanceRating : 'Transportation Distance',
    seasonRating : 'Seasonality'
};

const metricIcons = {
    co2Rating : 'Factory',
    waterRating : 'Water',
    energyRating : 'Light',
    daysToProduceRating : 'Clock',
    distanceRating : 'Deliver',
    seasonRating : 'Summer'
};

const Metric = props => {
    console.log(props);
    return (
        <div
            key={props.name}
            style={{width: 150, height: 160, paddingTop: 10, display: 'inline-block', textAlign: 'center'}}
        >
            <img width={60} height={60} src={'/assets/icons/' + metricIcons[props.name] + '.svg'}/>
            <p
              style={{fontSize: '20px', textAlign: 'center', width: '100px', fontWeight: 200, width: 150}}
            >
              {metricDescriptions[props.name]}
            </p>
            <StarRatingComponent 
                name="rating" 
                editing={false}
                renderStarIcon={(index, value) => {
                    return <img width="25" src={index <= value ? '/assets/icons/Star.svg' : '/assets/icons/StarEmpty.svg'} />;
                }}
                renderStarIconHalf={() => <img width="25" src="/assets/icons/StarHalf.svg"/>}
                starCount={5}
                value={props.value}
            />
        </div>
    );
};

class RecipeDetailsPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
      this.handleBackTouchTap = this.handleBackTouchTap.bind(this);
    }

    handleTitleTouchTap() {
        browserHistory.push('/');
    }

    handleBackTouchTap() {
        browserHistory.push('/recipes');
    }

    render() {
      const isError = this.props.error;
      const isEmpty = this.props.recipes === undefined;

      return (
        <div>
          <AppBar
            title={"Recipe Details"}
            onTitleTouchTap={this.handleTitleTouchTap}
            iconElementLeft={
                <IconButton
                    onTouchTap={this.handleBackTouchTap}
                >
                    <ArrowBack />
                </IconButton>
            }
            style={{backgroundColor: '#0f2364'}}
          />
          <Row>
            <Col xs={0} sm={1} md={2}/>
            <Col xs={12} sm={10} md={8}>
                <Card style={{margin: 20}}>
                    <CardText
                        style={{height: 80, padding: '0 20px 0 20px'}}
                    >
                        <p style={{fontSize: '2em', lineHeight: '80px'}}>
                            {this.props.recipe.name}
                        </p>
                    </CardText>
                    <CardMedia
                     overlay={
                         <CardTitle 
                            title={'Eco Score: ' + (this.props.recipe.totalRating || 0) + "/5"}
                        />
                     }
                     style={{height: this.props.containerWidth*6/12, overflow: 'hidden'}}
                    >
                        <img src={'assets/images/' + this.props.recipe.id + '.jpg'} />
                    </CardMedia>
                    <CardTitle 
                        title="Recipe: "
                    />
                    <CardText>
                        <p>{this.props.recipe.description}</p>
                    </CardText>
                    <CardTitle 
                        title="Rating Breakdown: "
                    />
                    <CardText>
                        <div
                            style={{textAlign: 'center'}}
                        >
                            {Object.keys(this.props.recipe.ratings || {
                                co2Rating : 0,
                                waterRating : 1,
                                energyRating : 2,
                                daysToProduceRating : 3,
                                distanceRating : 4,
                                seasonRating : 5
                            }).map((key, index) => {
                                const obj = {
                                    co2Rating : 0,
                                    waterRating : 1,
                                    energyRating : 2,
                                    daysToProduceRating : 3,
                                    distanceRating : 4,
                                    seasonRating : 5
                                };

                                const name = key;
                                const value = obj[key];
                                
                                return Metric({
                                    name: name,
                                    value: value
                                });
                            })}
                        </div>
                    </CardText>
                </Card>
            </Col>
            <Col xs={0} sm={1} md={2}/>
          </Row>
        <MarketsPrompt />
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipes.currentRecipe
  };
}

export default connect(mapStateToProps)(Dimensions()(RecipeDetailsPage));
