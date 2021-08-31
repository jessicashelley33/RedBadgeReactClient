import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Register from './UserLogin/Register';
import Login from './UserLogin/Login';
import history from './history';
//import Navbar from './NavBar'
import About from './About';
import Contact from './Contact';
import Phrases from './WordLists/Phrases';
import Greetings from './WordLists/Greetings';
import FamilyWords from './WordLists/FamilyWords';
import PhrasesTwo from './WordLists/PhrasesTwo';
import Food from './WordLists/Food';
import ColorsNumbers from './WordLists/ColorsNumbers';
import Card from './WordLists/Card';
import Create from './WordLists/Create';
import Admin from './Admin/AdminRoute';
//import DashboardAdmin from './Admin/dashboardAdmin';
import AboutAdmin from './Admin/AboutAdmin';
//import ContactAdmin from './Admin/ContactAdmin';




export default class Routes extends Component {
    render() {
        return (
            
            <Router history={history}>
                
                <Switch>
                        <Route path="/" exact component={()=> <Login {...this.props}/>} />
                        <Route path="/admin" component={Admin} />
                        {/*<Route exact path='/dashboardAdmin' Component={DashboardAdmin} />*/}
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                         <Route exact path='/phrases' component={ Phrases} />
                        <Route exact path='/greetings' component={ Greetings } />
                        <Route exact path='/familyWords' component={ FamilyWords} />
                        <Route exact path='/phrasesTwo' component={ PhrasesTwo} />
                        <Route exact path='/food' component={ Food } />
                        <Route exact path='/colorsNumbers' component={ ColorsNumbers } />
                        <Route exact path='/card' Component={Card} />
                        
                       <Route exact path='/aboutAdmin' Component={AboutAdmin} />
                        {/*<Route exact path='/contactAdmin' Component={ContactAdmin} />*/}
                        
                        
                        <Route path="/create" exact component={()=> <Create {...this.props}/>} />
                    </Switch>
                    </Router>
        )
    }
}