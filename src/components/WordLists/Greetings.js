import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgEight from '../../assests/imgEight.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import Create from './Create'




const Greetings = () => {
    const [wordsOne, setWordsOne] = useState();
    const [wordsTwo, setWordsTwo] = useState();
    const [wordsThree, setWordsThree] = useState();
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
      setWordsOne(obj.wordsOne)
      setWordsTwo(obj.wordsTwo)
      setWordsThree(obj.wordsThree)
    }, [])}
    
     return (
            <>
            <div>
                <NavBar />
                <div className="GreetingPage"
      style={{
        "--bg-greeting":'url('+ImgEight+')',
        
      }}
      >
          <h1
          style={{
              color: '#fff',
              fontSize:'78px',
              textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'

          }}>Phrases</h1>
          <p className="lead"
          style={{
            color: '#fff',
            fontSize:'38px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
            
        }}>
            Helpful Expressions for EveryDay Conversation</p>
        </div>
     <div className='container mt-5 mb-5'>
        <h2 className="mb-4"
        style={{
            fontSize:'48px',
            color: '#313133'
        }}
        >Helpful Phrases </h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Create wordList={addWordList} />
        {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
         </div>
        <div className="container">
          <div className="row">
          {Expressions()}
            <div className="col-sm-12 col-md-4 mt-3">
                <p className="card-text lead">
               {/* {(wordsOne|| []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    {wordsOne !== undefined ? wordsOne.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : " "}
                   </p>
                    
                   </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                    {/*{(wordsTwo || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                      {wordsTwo !== undefined ? wordsTwo.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
                    
                    </p>
                   
            </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                    {/*{(wordsThree || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    {wordsThree !== undefined ? wordsThree.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList} /> }) : ""}
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
    


export default Greetings;

