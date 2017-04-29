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
import { selectRecipe } from '../../actions/recipes';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class RecipesPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
      this.handleGripTouchTap = this.handleGripTouchTap.bind(this);
      this.handleOpenTouchTap = this.handleOpenTouchTap.bind(this);
      this.handleClose = this.handleClose.bind(this);  
      this.state = { open: false };
    }

    handleTitleTouchTap() {
      browserHistory.push('/');
    }

    handleGripTouchTap(recipe) {
      return () => {
        this.props.dispatch(selectRecipe(recipe));
        browserHistory.push('/recipe-details');
      };
    }

    handleOpenTouchTap() {
      this.setState({ open: true });
    }

    handleClose() {
      this.setState({ open: false });
    }

    render() {
      const isError = this.props.error;
      const isEmpty = this.props.recipes === undefined;

      return (
        <div>
          <AppBar 
            title={"What's for dinner?"}
            onTitleTouchTap={this.handleTitleTouchTap}
            iconElementLeft={<div />}
            style={{backgroundColor: '#0f2364'}} 
          />
          {this.props.isLoading ? (
            <CircularProgress size={80} thickness={5} />
          ) : 
            (
              <div> 
                <Row style={{padding: 30, marginBottom: 20}}>
                  <Col xs={0} sm={1} md={2}/>
                  <Col xs={12} sm={10} md={8}>
                    <Card style={{marginBottom: 20, padding: '5px 25px 10px 25px'}}>
                      {isEmpty ? (
                        <div>
                          <h4>Pick a postcode to get started...</h4>
                          <p>Enter a postcode to recieve personalised recipe recommendations:</p>
                          <FlatButton
                              label="Select Postcode"
                              primary
                              onTouchTap={this.handleOpenTouchTap}
                          />
                        </div>
                      ) : (
                        <div>
                          <h3><strong>Awesome!</strong></h3>
                          <h4>Here are your eco friendly recipes:</h4>
                          <p>Each one has a score based on your location, the time of year, and the lifecycle of the ingredients. Pick a recipe to find out more about what goes into it.</p>
                          <p><strong>Start making better food choices today!</strong></p>
                          <FlatButton
                              label="Change Postcode"
                              primary
                              onTouchTap={this.handleOpenTouchTap}
                          />
                        </div>
                      )}
                    </Card>
                  </Col>
                  <Col xs={0} sm={1} md={2}/>
                </Row>
                <Row>
                  <Col xs={2} sm={3} md={4}/>
                  <Col xs={8} sm={6} md={4}>

                  </Col>
                  <Col xs={2} sm={3} md={4}/>
                </Row>
                <Row height={this.props.containerHeight-200}>
                  <Col xs={0} sm={1} md={2}/>
                  <Col xs={12} sm={10} md={8}>
                      {isError ? (
                        <p>Sorry, we couldn't get the recipes for you. Please try again.</p>
                      ) : (
                        <div>
                          {isEmpty ? (<div />) : (
                            <Card style={{padding: 5, margin: 10}}>
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
                                    onTouchTap={this.handleGripTouchTap(recipe)}
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
                  <Col xs={0} sm={1} md={2}/>
                </Row>
                <Row>
                  <Col xs={1} sm={3} md={4}/>
                  <Col xs={10} sm={6} md={4}>
                    <Card style={{width: '100%', margin: '50px auto 50px auto', padding: '20px 25px 10px 25px'}}>
                      <div style={{textAlign: 'center', margin: '0 auto 5px auto', width: 150}}> 
                        <img src="assets/icons/Pig.svg" width={50} height={50}/> 
                        <img src="assets/icons/Chicken.svg" width={50} height={50}/> 
                        <img src="assets/icons/Food.svg" width={50} height={50}/> 
                      </div>
                      <p>Why not check out your local farmers markets? 
                      It's the best way to get cheap, sustainable produce.
                      Find out more <a href="/">here!</a></p>
                    </Card>
                  </Col>
                  <Col xs={1} sm={3} md={4}/>
                </Row>
                <Dialog
                  title="Select Postcode"
                  actions={[      
                    <FlatButton
                      label="Cancel"
                      primary={true}
                      onTouchTap={this.handleClose}
                    />
                  ]}
                  open={this.state.open}
                >
                  <PostcodeForm 
                    onSubmitComplete={this.handleClose}
                  />
                </Dialog>
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
