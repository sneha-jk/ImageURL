import './App.css';
import React, { useState } from 'react';
function App() {
    const initialUrl = Object.freeze({url1:"",
  url2:"",url3:""
});
const [data, updatedData] = React.useState(initialUrl);
const [inputarr,setInputarr]= useState([])
const handleChange=(e)=>{
  updatedData({...data,[e.target.name]:e.target.value.trim()});
  
}
const handleSubmit=(e)=>{
  e.preventDefault();
  let url1= data.url1;
  let url2= data.url2;
  let url3= data.url3;
  setInputarr([...inputarr,{url1,url2,url3}])
  console.log(data);
}
  return (
    <div className="App">
      <p style={{fontWeight:'bold', fontSize:"40px", fontStyle:"revert"}}>Image Loader</p>
      <div className='box1'>
      <label>Image URL1</label><br/>
      <input type="Text" placeholder='Enter the Image URL 1' name='url1' onChange={handleChange}></input><br/>
      <label>Image URL2</label><br/>
      <input type="Text" placeholder='Enter the Image URL 2' name='url2' onChange={handleChange}></input><br/>
      <label>Image URL3</label><br/>
      <input type="Text" placeholder='Enter the Image URL 3'  name='url3' onChange={handleChange}></input><br/>
      <button onClick={handleSubmit}>create</button>
      </div>
      <div className='box2'>
        <div className='row'>
        {
           inputarr.map(
            (info,ind)=>{
            return(
              <><div key={ind}>
                <div className='column'>
              <img 
              src={info.url1}
              alt="new"
              /></div>
               <div className='column'>
               <img 
              src={info.url2}
              alt="new"
              /></div>
              <div className='column'>
               <img 
              src={info.url3}
              alt="new"
              />
              </div>
              </div>
  
              </>
            )
          }
  )
        }
        </div>
      </div>
    </div>
  );
}

export default App;