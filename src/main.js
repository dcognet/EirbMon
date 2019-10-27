import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import reducers from './reducers'
import thunk from 'redux-thunk';
import { withRouter, Route, Switch } from "react-router-dom";

import AppComponent from "./components";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from 'notistack';
import ConnectUnity from './components/connectUnity';
import Login from './components/login';
import SignUp from './components/signUp';
import Profil from './components/profil';

import API from './api';

require('./scss/main.scss');

const myTheme = createMuiTheme();

const history = createBrowserHistory()
let store = createStore(reducers(history),
    applyMiddleware(thunk.withExtraArgument(API), routerMiddleware(history))
);
// store as GLOBAL
window.__redux__ = store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={myTheme}>
                <Switch>
                    {/*<SnackbarProvider>
                        <AppComponent />
                    </SnackbarProvider> */}
                    <Route path="/" exact={true} component={ConnectUnity} />
                    <Route path="/connectUnity" exact={true} component={ConnectUnity} />
                    <Route path="/login" exact={true} component={Login} />
                    <Route path="/signUp" exact={true} component={SignUp} />
                    <Route path="/profil" exact={true} component={Profil} />
                </Switch>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider >
    ,
    document.getElementById('root')
)