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

      const scoreDescriptions = [
          'Entirely unsustainable - avoid!',
          'OK occasionally, but not part of your weekly shop!',
          'Good as a treat, once or twice a week.',
          'This meal is great for the environment - make it a staple!',
          'As good as it gets - one of the most sustainable recipes.'
      ];

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
                    <CardHeader
                        title={this.props.recipe.name}
                        subtitle={this.props.recipe.description}
                        />
                    <CardMedia
                     overlay={
                         <CardTitle 
                            title={"Eco Score: " + (this.props.recipe.totalRating || 0) + "/5"}
                            subtitle={scoreDescriptions[Math.round(this.props.recipe.totalRating || 0)]}
                        />
                     }
                     style={{height: this.props.containerWidth*6/12}}
                    >
                        <img src="images/nature-600-337.jpg" />
                    </CardMedia>
                    <CardTitle 
                        title="Recipe rating breakdown: "
                    />
                    <CardText>
                        <p>Icons etc</p>
                    </CardText>
                    <CardTitle 
                        title="Recipe: "
                    />
                    <CardText>
                        <p>{JSON.stringify(this.props.recipe, null, 4)}</p>
                    </CardText>
                </Card>
            </Col>
            <Col xs={0} sm={1} md={2}/>
          </Row>
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
