import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import {routes} from './router';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            {
                routes.map((item)=>{
                    return <Route key={item.path} path={item.path} component={item.component} />
                })
            }
            <Redirect from="/" to='/app' exact />
            <Redirect to='/404' />
        </Switch>
    </Router>
</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
