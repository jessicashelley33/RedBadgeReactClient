import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgOne from '../../assests/imgOne.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import { useState } from 'react'
import Card from './Card';
import Create from './Create'
//import history from '../history';






const Phrases = (props) => {

  const [greetings, setGreetings] = useState();
  const [introductions, setIntroductions] = useState();
  const [salutations, setSalutations] = useState();
  const [addWordList, setAddWordList] = useState([]);
  //const [deleteWordList, setDeleteWordList] = useState([]);
  
  const CreateList = (value) => {
      const list = addWordList;
      setAddWordList([].concat(list, [value]))
  }
  


const Expressions = () => {
  fetch('db.json')
  .then(res => res.json())
  .then(obj =>{
      //console.log(obj)
    // console.log(obj.greetings)
   setGreetings(obj.greetings)
   setIntroductions(obj.introductions)
   setSalutations(obj.salutations)
  }, [])}
  
   return (
          <>
          <div>
              <NavBar />
              <div className="GreetingPage"
    style={{
      "--bg-greeting":'url('+ImgOne+')',
      
    }}
    >
        <h1
        style={{
            color: '#fff',
            fontSize:'78px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
        }}>Daily Phrases</h1>
        <p className="lead"
        style={{
          color: '#fff',
          fontSize:'38px',
          textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
          
      }}>
          Daily Expressions for EveryDay Conversation</p>
      </div>
   <div className='container mt-5 mb-5'>
      <h2 className="mb-4"
      style={{
          fontSize:'48px',
          color: '#313133'
      }}
      >Basic Greetings & Introductions</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <div>
        <div>
          <Create wordList={addWordList} />
          
      </div>
     </div>

     
      {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
       </div>
      <div className="container">
        <div className="row">
            {Expressions()}
          <div className="col-sm-12 col-md-4 mt-3">
              
                   
                   <p className="card-text lead">
                  {(greetings || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}
                  </p>
                </div>
          <div className="col-sm-12 col-md-4 mt-3">
              
                  <p className="card-text lead">
                  {(introductions || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}
                    
                  </p>
                 
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
              <p className="card-text lead">
                {(salutations || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}
                  {/*{salutations !== undefined ? salutations.map((x,i)=>{ return <Card key={i} data={x} /> }) : ""}*/}
                  </p>
          </div>
        </div>
           </div>
          </div>
          </div> 
          <Footer />
          </>
          )
    }
    


export default Phrases;

