import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'stream-browserify';

import reducers from './reducers';
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey800, indigo900,
  deepOrangeA400, grey100,
  grey800, grey300, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo900,
    primary2Color: blueGrey800,
    primary3Color: grey100,
    accent1Color: deepOrangeA400,
    accent2Color: grey800,
    accent3Color: grey500,
    pickerHeaderColor: '#f26c4f',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

import Page from './components/Page';
import HomePage from './components/HomePage'
import RecipesPage from './components/RecipesPage'
import RecipeDetailsPage from './components/RecipeDetailsPage';

ReactDom.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Page}>
                    <IndexRedirect to="home" />
                    <Route path="home" component={HomePage} />
                    <Route path="recipes" component={RecipesPage} />
                    <Route path="recipe-details" component={RecipeDetailsPage} />
                </Route>
                <Redirect from="*" to="/" />
            </Router>
        </Provider>
    </MuiThemeProvider>,
	document.getElementById('app')
);
