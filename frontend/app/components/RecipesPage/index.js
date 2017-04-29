import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';

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
        ) : ( 
          tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))
        )}
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
