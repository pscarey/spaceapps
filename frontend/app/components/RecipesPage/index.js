import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';

class RecipesPage extends React.Component {
  render() {
    return (
      <div>
        <AppBar 
          title="What's for dinner?" 
          iconElementLeft={<div />} 
        />
        {this.props.isLoading ? (
          <CircularProgress size={80} thickness={5} />
        ) : 
          this.props.error ? (
            <p>Sorry, we couldn't load the recipes for your location.</p>
          ) : ( 
            <GridList
              cellHeight={300}
            >
              {this.props.recipes.map(recipe => (
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
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    recipes: state.recipes.recipes,
    isLoading: state.recipes.isLoading
  };
}

export default connect(mapStateToProps)(RecipesPage);
