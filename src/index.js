import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as  Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

ReactDOM.render(
 // <React.StrictMode>
   // <App />
  //</React.StrictMode>,
  <Router history={history}>
        <Switch>
            <Route path='/' component={App}/>
        </Switch>
        </Router>,
        document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
