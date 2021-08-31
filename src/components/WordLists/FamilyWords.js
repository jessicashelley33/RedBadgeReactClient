import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgFamily from '../../assests/family.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import Create from './Create';




const FamilyWords = () => {
    
    const [familyOne, setFamilyOne] = useState();
    const [familyTwo, setFamilyTwo] = useState();
    const [familyThree, setFamilyThree] = useState();
    const [addWordList, setAddWordList] = useState([]);
   

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
      setFamilyOne(obj.familyOne)
      setFamilyTwo(obj.familyTwo)
      setFamilyThree(obj.familyThree)
    }, [])}
    
    return (
            <>
            <div>
                <NavBar />
                <div className="GreetingPage"
      style={{
        "--bg-greeting":'url('+ImgFamily+')',
        
      }}
      >
          <h1
          style={{
              color: '#fff',
              fontSize:'78px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
          }}>Helpful Family Words</h1>
          <p className="lead"
          style={{
            color: '#fff',
            fontSize:'38px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
            
        }}>
            Helpful Family Words for EveryDay Conversation</p>
        </div>
  <div className='container mt-5 mb-5'>
        <h2 className="mb-4"
        style={{
            fontSize:'48px',
            color: '#313133'
        }}
        >Basic Family Words</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Create wordList={addWordList} />
        {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
      </div>
        <div className="container">
          <div className="row">
          {Expressions()}
            <div className="col-sm-12 col-md-4 mt-3">
                  <p className="card-text lead">
                 {/* {(familyOne || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                   {familyOne !== undefined ? familyOne.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
                    </p>
                </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                   {/* {(familyTwo || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                      {familyTwo !== undefined ? familyTwo.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
                    
                    </p>
                  </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                    {(familyThree || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}   />)}
                    {/*{familyThree !== undefined ? familyThree.map((x,i)=>{ return <Card key={i} data={x} /> }) : ""}*/}
                    </p>
            </div>
          </div>
          </div>
            </div>
            </div> 
            <Footer />
            </>
            )}
    


export default FamilyWords;

