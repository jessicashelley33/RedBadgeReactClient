import React from 'react';
import NavBar from '../NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgTen from '../../assests/color.jpg';
import Footer from '../Footer'
import '../css/pages.css';
//import { Link } from 'react-router-dom';
import Card from './Card';
import { useState } from 'react';
import Create from './Create';




const ColorsNumbers = () => {
    
    const [colors, setColors] = useState();
    const [numbers, setNumbers] = useState();
    const [colorsAndNumbers, setColorsAndNumbers] = useState();
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
    
      setColors(obj.colors)
      setNumbers(obj.numbers)
      setColorsAndNumbers(obj.colorsAndNumbers)
    }, [])}
    
    return (
            <>
            <div>
                <NavBar />
                <div className="GreetingPage"
      style={{
        "--bg-greeting":'url('+ImgTen+')',
        
      }}
      >
          <h1
          style={{
              color: '#fff',
              fontSize:'78px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
          }}>Colors and Numbers </h1>
          <p className="lead"
          style={{
            color: '#fff',
            fontSize:'38px',
            textShadow: '-1px 0 #312f34, 0 1px #312f34, 1px 0 #312f34, 0 -1px #312f34'
            
        }}>
            Learn Colors and Numbers</p>
        </div>
    <div className='container mt-5 mb-5'>
        <h2 className="mb-4"
        style={{
            fontSize:'48px',
            color: '#313133'
        }}
        >Colors and Numbers </h2>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Create wordList={addWordList} />
        {/* <button class="btn btn-outline-success btn-lg" onClick={Expressions}>Click Me</button>*/}
        </div>
        <div className="container">
          <div className="row">
          {Expressions()}
            <div className="col-sm-12 col-md-4 mt-3">
                
              <p className="card-text lead">

              {/*{(colors || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                    {colors !== undefined ? colors.map((x,i)=>{ return <Card key={i} data={x}
                    addToList={CreateList}/> }) : ""}
                    
                    </p>
                </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                   {/* {(numbers || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                     {numbers !== undefined ? numbers.map((x,i)=>{ return <Card key={i} data={x}  addToList={CreateList} /> }) : ""}
                  </p>
                </div>
            <div className="col-sm-12 col-md-4 mt-3">
                
                    <p className="card-text lead">
                   {/* {( colorsAndNumbers || []).map((x,i)=> <Card key={i} data={x} addToList={CreateList}  />)}*/}
                   {colorsAndNumbers !== undefined ? colorsAndNumbers.map((x,i)=>{ return <Card key={i} data={x} addToList={CreateList}  /> }) : ""}
                    </p>
            </div>
          </div>
            </div>
            </div>
            </div> 
            <Footer />
            </>
            )}
    


export default ColorsNumbers;

