import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgNine from '../../assests/imgNine.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import Create from './Create'





const Food = () => {
    
    const [foodListOne, setFoodListOne] = useState();
    const [foodListTwo, setFoodListTwo] = useState();
    const [foodListThree, setFoodListThree] = useState();
    const [addWordList, setAddWordList] = useState([]);

    const CreateList = (value) => {
      //console.log('who me the money...', value);
      const list = addWordList;
      setAddWordList([].concat(list, [value]))
  }   

  const Expressions = () => {
    fetch('db.json')
    .then(res => res.json())
    .then(obj =>{
        //console.log(obj)
      // console.log(obj.greetings)
      setFoodListOne(obj.foodListOne)
      setFoodListTwo(obj.foodListTwo)
      setFoodListThree(obj.foodListThree)
    }, [])}
    
    return (
            <>
            <div>
                <NavBar />
                <div className="GreetingPage"
      style={{
        "--bg-greeting":'url('+ImgNine+')',
        
      }}
      >
          <h1
          style={{
              color: '#fff',
              fontSize:'78px',
              textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'

          }}>Basic Food Words</h1>
          <p className="lead"
          style={{
            color: '#fff',
            fontSize:'38px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
            
        }}>
            Helpful Food Words for EveryDay Conversation</p>
        </div>
    <div className='container mt-5 mb-5'>
        <h2 className="mb-4"
        style={{
            fontSize:'48px',
            color: '#313133'
        }}
        >Basic Food & Introductions</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Create wordList={addWordList} />
        {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
        </div>
        <div className="container">
          <div className="row">
          {Expressions()}
            <div className="col-sm-12 col-md-4 mt-3">
            {/*{(foodListOne || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
               <p className="card-text lead">
                    {foodListOne !== undefined ? foodListOne.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
                     </p>
                  </div>
            <div className="col-sm-12 col-md-4 mt-3">
                 {/*} {(foodListTwo || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    <p className="card-text lead">{foodListTwo !== undefined ? foodListTwo.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""} </p>
                     
                  </div>
            <div className="col-sm-12 col-md-4 mt-3">
           {/*} {(foodListThree || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                 <p className="card-text lead">
                    {foodListThree !== undefined ? foodListThree.map((x,i)=>{ return <Card key={i} data={x}  addToList={CreateList}/> }) : ""}</p>
            </div>
          </div>
          </div>
            </div>
            </div> 
            <Footer />
            </>
            )}
    


export default Food;

