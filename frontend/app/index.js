import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'stream-browserify';

injectTapEventPlugin();

import HomePage from './components/HomePage'

ReactDom.render(
    <Router>
        <Route path="/" component={HomePage} />
    </Router>,
	document.getElementById('app')
);


/*    
<Redirect from="*" to="/" />

import reducer from './reducers';
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));    
    <Provider store={store}>
        
    </Provider>

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey800,
  grey100, grey300, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey800,
    primary2Color: blueGrey800,
    primary3Color: blueGrey800,
    accent1Color: '#f26c4f',
    accent2Color: grey100,
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
        <MuiThemeProvider muiTheme={muiTheme}>
        </MuiThemeProvider>
*/