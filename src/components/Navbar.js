import React from 'react'
import './menuCard.css';

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
         <nav className='navbar'>
      <div className='btn-group'>
    {
        menuList.map((curEle) =>{
            return(
                <button className='btn-group-item' onClick={() => filterItem(curEle)}>{curEle}</button>  
            )
        })
    }

        {/* <button className='btn-group-item' onClick={() => filterItem("veg")}>Veg</button>
        <button className='btn-group-item' onClick={() => filterItem("chicken")}>Chicken</button>
        <button className='btn-group-item' onClick={() => filterItem("fruit")}>Fruit</button>
        <button className='btn-group-item' onClick={()=> setData(Menu)}>All</button> */}
      </div>
    </nav>
    </>
  )
}

export default Navbar