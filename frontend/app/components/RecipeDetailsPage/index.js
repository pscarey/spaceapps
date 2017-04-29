import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

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
            title={"What's for dinner?"}
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
          <p>{JSON.stringify(this.props.recipe, null, 4)}</p>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipes.currentRecipe
  };
}

export default connect(mapStateToProps)(RecipeDetailsPage);
