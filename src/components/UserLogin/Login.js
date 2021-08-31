import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './user.css';
import LoginBg from '../../assests/loginThree.jpg';
//import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import history from '../history';
import { useState } from 'react';

const Login = (props) => {

  /*  const HomePage = () => {
        history.push('/dashboard')
    }*/

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
   
      

   

    let handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/user/login', {
        method: "POST",
        body: JSON.stringify({ userName: userName, password: password }),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            if(json.message === "Incorrect username or password"){
                //console.log("username and or password is incorect")
                document.getElementById('errorMessage').innerHTML = "Username and or password is Incorrect. Please try again."
            } else{
                localStorage.setItem('token', json.sessionToken)
                if(json.isAdmin) {
                    history.push('/admin')
                } else {
                    history.push('/dashboard')
                }
            }  
        });
    };

    return (
        <div className="bg-light"
        style={{"--bg-light":'url('+LoginBg+')' }}
            
        >
            <div style={{
                paddingBottom: '30rem',
                
            }}>
            <h1 className="wrapper mb-5"
            style={{
                paddingTop: '13rem',
                color: '#fff',
                fontSize: '76px',
                textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
            }}
            >Please Login</h1>
        <Container>
            <Row>
            <Col sm={12} md={6} className="container">
            <input className="mb-3 p-3"
             style={{
                width:'600px',
                height: '60px',
                borderRadius: '20px',
                outline: 'none',
                opacity: '0.75',}}
                    type="name" 
                    placeholder="UserName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} />
                </Col>
            </Row>
        <Row>
        <Col sm={12} md={6} className="container">
        <input className="p-3"
                    style={{
                        width:'600px',
                        borderRadius: '20px',
                        height: '60px',
                        outline: 'none',
                        opacity: '0.75'}}
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </Col>
                </Row>
                <button 
                    className="btn btn btn-secondary mt-3"
                    style={{
                        paddingLeft: '150px',
                        paddingRight: '150px'
                    }}
                    
                    onClick={handleSubmit}
                    >Submit</button>
                    <div id="errorMessage"
                    className="mt-3 fs-5 fw-bolder font-monospace text-danger "
                    style={{
                        textShadow: '-0.5px 0 #333, 0 0.5px #333, 0.5px 0 #333, 0 -0.5px #333',
                    }}
                    >
                        
                    </div>
            <div className="mt-3">
                <ul className="smallText">
                    <li className="text-white m-2"
                    style={{
                        textShadow: '-1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333',
                        fontSize: '24px'
                    }}
                    >
                    Create an Account?
                    </li>
                    <li className="text-white m-2"> <Link to='/register' className="text-white fw-bold text-center"
                     style={{
                        fontSize: '24px'
                    }}
                    >Register Here</Link></li>
                </ul>
            </div>
             </Container>
            </div>
        </div>
    )
}

export default Login