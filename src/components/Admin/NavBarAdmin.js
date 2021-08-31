import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavIcon from '../../assests/pandaIcon.jpg';
//import HomeIcon from '../assests/homeIcon.jpg'



export class NavbarAdmin extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm navbar-light">
                <img src={NavIcon} alt='NavIcon'/>
                  <Link to="/dashboard"
                  style={{
                    
                    fontSize: '30px',
                    color: '#587644',
                    textShadow: '-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff'
                }}
                className="navbar-brand"
                  >Causal Learner</Link>  
                   
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        
                            <Link className="nav-link" to="/dashboard">Home
                            
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutAdmin">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="btn btn btn-outline-info" to="/admin">Admin Portal</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="btn btn btn-outline-secondary" to="/">Logout</Link>
                        </li>

                    </ul>
            </nav>
        )
    }
}

export default NavbarAdmin