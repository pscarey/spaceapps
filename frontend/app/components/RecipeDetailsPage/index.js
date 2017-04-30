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


const scoreDescriptions = [
    'Entirely unsustainable - avoid!',
    'OK occasionally, but not part of your weekly shop!',
    'Good as a treat, once or twice a week.',
    'This meal is great for the environment - make it a staple!',
    'As good as it gets - one of the most sustainable recipes.'
];

const niceFoodDescriptions = {
    
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
                        title="Rating: "
                    />
                    <CardText>
                        {Object.keys(this.props.recipe.ratings || {}).map((key, index) => {
                            const name = key;
                            const value = this.props.recipe.ratings[name];
                            return (
                                <p> 
                                    {name} 
                                </p>
                            );
                        })}
                    </CardText>
                    <CardTitle 
                        title="Recipe: "
                    />
                    <CardText>
                        <p>{this.props.recipe.description}</p>
                    </CardText>
                </Card>
            </Col>
            <Col xs={0} sm={1} md={2}/>
          </Row>
          <div style={{height: 50}} />
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
