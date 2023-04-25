import React, { useEffect } from 'react'
import './Header.css';
import { useState } from 'react';
 
const Header = () => {
  const [number, setNumber] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${number}&idStarts=1001`);
      const res = await get.json();
      setData(res);
    }
    getData();
  },[number])

   return(
   <>
    <button onClick= {() => setNumber(number+5)}>Show more data</button>
 {
  data.map ((element,index)=> {
    return(
      <div className='dataemployee' key={index}>
      <h4>{element.id}</h4> 
        <h4>{element.firstName}</h4> 
        <h4>{element.lastName}</h4>
        <h4>{element.email}</h4>
      </div>
    )
  })
 }
     
 

  
   </>
   
  )
}

export default Header