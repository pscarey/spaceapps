import React, { PropTypes } from 'react';
import Page from '../../components/Page';
import AppBar from 'material-ui/AppBar';

class RecipesPage extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="What's for dinner?" />
        Recipes page
      </div>
    );
  }
}

export default RecipesPage;
