import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import { GridList, GridTile } from 'material-ui/GridList';
import { browserHistory } from 'react-router';
import PostcodeForm from '../PostcodeForm';
import { Row, Col } from 'react-bootstrap';
import Dimensions from 'react-dimensions'
import Card from 'material-ui/Card';

class RecipesPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleTouchTap() {
      browserHistory.push('/');
    }

    render() {
      const isError = this.props.error;
      const isEmpty = this.props.recipes === undefined;

      return (
        <div>
          <AppBar 
            title={"What's for dinner?"}
            onTitleTouchTap={this.handleTouchTap}
            iconElementLeft={<div />}
            style={{backgroundColor: '#0f2364'}} 
          />
          {this.props.isLoading ? (
            <CircularProgress size={80} thickness={5} />
          ) : 
            (
              <div> 
                <Row style={{padding: 30, marginBottom: 20}}>
                  <Col xs={12} sm={12} md={2}></Col>
                  <Col xs={12} sm={8} md={4}>
                    <Card style={{marginBottom: 20, padding: '5px 25px 10px 25px'}}>
                      {isEmpty ? (
                        <div>
                          <h4>Pick a postcode to get started...</h4>
                          <p>Enter a postcode to recieve personalised recipe recommendations:</p>
                        </div>
                      ) : (
                        <div>
                          <h3><strong>Awesome!</strong></h3>
                          <h4>Here are your eco friendly recipes:</h4>
                          <p>Each one has a score based on your location, the time of year, and the lifecycle of the ingredients. Pick a recipe to find out more about what goes into it.</p>
                          <p><strong>Start making better food choices today!</strong></p>
                        </div>
                      )}
                    </Card>
                  </Col>
                  <Col xs={12} sm={4} md={4}>
                      <PostcodeForm />
                  </Col>
                  <Col xs={12} sm={12} md={2}/>
                </Row>
                <Row height={this.props.containerHeight-200}>
                  <Col xs={12} sm={12} md={2}></Col>
                  <Col xs={12} sm={8} md={8}>
                      {isError ? (
                        <p>Sorry, we couldn't get the recipes for you. Please try again.</p>
                      ) : (
                        <div>
                          {isEmpty ? (<div />) : (
                            <Card style={{padding: 5}}>
                              <GridList
                                cellHeight={this.props.containerWidth*8/12> 600 ? this.props.containerWidth*8/(3*12) : this.props.containerWidth*8/(2*12)}
                                cols={this.props.containerWidth*8/12 > 600 ? 3 : 2}
                              >
                                {(this.props.recipes || []).map(recipe => (
                                  <GridTile
                                    key={recipe.id}
                                    title={recipe.name}
                                    subtitle={recipe.description}
                                    actionIcon={<div />}
                                  >
                                    <img src={'/assets/recipes/' + recipe.id} />
                                  </GridTile>
                                ))}
                              </GridList>
                            </Card>
                          )}
                        </div>
                      )}
                  </Col>
                  <Col xs={12} sm={12} md={2}></Col>
                </Row>
                <Row>
                  <Col xs={1} sm={3} md={4}/>
                  <Col xs={10} sm={6} md={4}>
                    <Card style={{height: 100, width: '100%', margin: '40px auto 40px auto', padding: '20px 25px 10px 25px'}}>
                      <p>Why not check out your local farmers markets? 
                      It's the best way to get cheap, sustainable produce.
                      Find out more <a href="/">here!</a></p>
                    </Card>
                  </Col>
                  <Col xs={1} sm={3} md={4}/>
                </Row>
              </div>
            )
          }
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes.recipes,
    isLoading: state.recipes.isLoading
  };
}

export default connect(mapStateToProps)(Dimensions()(RecipesPage));
