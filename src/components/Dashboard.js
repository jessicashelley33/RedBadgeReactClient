import React from 'react';
import HeroBg from '../assests/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/dashboard.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';





export default function Dashboard() {
  
  return (
      <>
       <NavBar />
      <div className="HeroBg"
      style={{
        "--bg-Home":'url('+HeroBg+')'
      }}
      >
         
          <div>
              <h1
               style={{
                fontSize: '80px',
                paddingTop: '10rem',
                color:'#587644',
                textShadow: '-1px 0 #496239, 0 1px #496239, 1px 0 #496239, 0 -1px #496239'
            }}
              >Welcome to Causal Learner</h1>
              <p
             style={{
                 fontSize: '38px',
                 marginBottom: '10rem',
                 color: '#587644',
                 textShadow: '-1px 0 #496239, 0 1px #496239, 1px 0 #496239, 0 -1px #496239'
             }}
             >Your Quick Guide for Learning Mandarin</p>
          </div>
            
                                <div className="row justify-content-sm-around justify-content-md-around justify-content-lg-around
                                        ">
                                        <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Daily Phrases</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Sentences</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/phrases">
                                                Click Here </Link> 
                                                </div>
                                                <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Daily Greetings</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Greetings</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/greetings">
                                                Click Here </Link> 
                                                </div>


                                                <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Family Words</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Words for Family</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/familyWords">
                                                Click Here </Link> 
                                                </div>
                                            </div>
                                            <div className="row justify-content-sm-around justify-content-md-around justify-content-lg-around
                                        "
                                        style={{
                                            marginBottom: '6rem'
                                        }}
                                        >
                                        <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Daily Phrases Part Two</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Sentences</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/phrasesTwo">
                                                Click Here </Link> 
                                                </div>
                                                <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Daily Food Words</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Sentences</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/food">
                                                Click Here </Link> 
                                                </div>


                                                <div className="col-sm-12 col-md-4 col-lg-6"
                                        style={{
                                            backgroundColor:"#e9f3e2",
                                            color:'702e3d',
                                            width: '350px',
                                            height:'350px',
                                            margin: '3rem',
                                            boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                                            borderRadius: '10%'
                                        }}>
                                            <h6 className="lead"
                                            style={{
                                                marginTop: '3.6em',
                                                color: '#496239'
                                            }}
                                            >Word List</h6>
                                        <h4 className="lead"
                                            style={{
                                                color:'#587644',
                                                fontWeight: '500'
                                            }}>Colors and Numbers</h4>
                                            <p
                                            style={{
                                                color:'#587644'
                                            }}
                                            >Commonly Used Sentences</p>
                                            <Link
                                                className="btn btn-outline-success"
                                                style={{
                                                    textDecoration:'none',
                                                    }}
                                                to="/colorsNumbers">
                                                Click Here </Link> 
                                               </div>
                                            </div>
                                        </div>
                                            <Footer />
                                        </>
                                        
                                    );
                                    }
