import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';

import PrivateRoute from './components/route-validation';
import Join from './components/join';
import Play from './components/play';
import Welcome from './components/welcome';

import * as serviceWorker from './serviceWorker';

const gateway = (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route path="/welcome" component={Welcome} />
            <PrivateRoute exact path="/" component={Play} />
            <PrivateRoute path="/play" component={Play} />
            <PrivateRoute path="/join" component={Join} />
        </div>
    </Router>
);

ReactDOM.render(gateway, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
