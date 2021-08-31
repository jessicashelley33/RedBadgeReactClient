import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgSix from '../../assests/imgSix.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import Create from './Create';
//<a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>




const PhrasesTwo = () => {

    const [addWordList, setAddWordList] = useState([]);
  
    const CreateList = (value) => {
        
        const list = addWordList;
        setAddWordList([].concat(list, [value]))
    }
    
    const [dailyPhraseOne, setDailyPhraseOne] = useState()
    const [dailyPhraseTwo, setDailyPhraseTwo] = useState()
    const [dailyPhraseThree, setDailyPhraseThree] = useState()

const Expressions = () => {
    fetch('db.json')
    .then(res => res.json())
    .then(obj =>{
        //console.log(obj)
      
      setDailyPhraseOne(obj.dailyPhraseOne)
      setDailyPhraseTwo(obj.dailyPhraseTwo)
      setDailyPhraseThree(obj.dailyPhraseThree)
    }, [])}
    
    return (
            <>
            <div>
                <NavBar />
                <div className="GreetingPage"
      style={{
        "--bg-greeting":'url('+ImgSix+')',
        
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
        >Basic Phrases Part Two</h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Create wordList={addWordList} />
        {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
        </div>
        <div className="container">
          <div className="row">
          {Expressions()}
            <div className="col-sm-12 col-md-4 mt-3">
                <p className="card-text lead">
               {/*{(dailyPhraseOne|| []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    {dailyPhraseOne !== undefined ? dailyPhraseOne.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
                    </p>
                </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                   {/* {(dailyPhraseTwo|| []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                        {dailyPhraseTwo !== undefined ? dailyPhraseTwo.map((x,i)=>{ return <Card key={i} data={x} /> }) : ""} 
                        </p>
                </div>
            <div className="col-sm-12 col-md-4 mt-3">
                    <p className="card-text lead">
                   {/* {(dailyPhraseThree|| []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    {dailyPhraseThree !== undefined ? dailyPhraseThree.map((x,i)=>{ return <Card key={i} data={x} /> }) : ""}
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
    


export default PhrasesTwo;

