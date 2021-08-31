import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
//import { useState } from 'react'
//import { Container, Row, Col } from 'reactstrap'
//import { makeStyles } from '@material-ui/core/styles';



//import Grid from '@material-ui/core/Grid';

const Card = (props) => {

   
    return(
        <div>
            {/* <h1>hello fatso {props.data.hello}</h1>
            <h2>{props.data.one}</h2>
            <h2>{props.data.two}</h2>
            <h2>{props.data.three}</h2> */}
            
           <div>
                <div className="card"
                 style={{
                    backgroundColor:"#f8f8ff",
                    color:'#313133',
                    width: '350px',
                    height:'350px',
                    margin: '3rem',
                    boxShadow: '2px 5px 7px rgba(0,0,0,0.2)',
                    borderRadius: '10%',
                    
                }}
                >
                <div className="card-body">
                   
                    <p className="card-text lead mt-3">
                    {props.data.one.map((x,i) => {
                       return <p key={i}>{x}</p>;
                    })}
                    </p>
                     <button to="#" className="btn btn-outline-success m-2 btn-lg"
                   
                    onClick={() => props.addToList(props.data.one.map((x,i)=> {
                        return <p key={i}>{x}</p>}))}>Add
                   </button>
                    </div>
                </div>
           
        
       </div>
        </div>
    )
}

export default Card