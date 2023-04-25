import React from 'react'
import './menuCard.css';

const MenuCard = ({menuData}) => {

  return (
    <>
    {
        menuData.map((curElement) => {
            const {name,des,image,Price} = curElement;
            return(
                <div className="card-container">
            <div className="card">
            <img src={image} alt="images" className='card-media'/>
           <div className="card-body">
           
            {/* <span className='card-number'>{id}</span> */}
            <span className='card-name'>{name}</span>
            <h2 className='card-title'>{Price}</h2>
            <span className='card-des'>{des}</span>
        </div>
       
        <span className='card-btn'>Order Now</span>
    </div>
        </div>
       
            )
        })
    }
       
    </>
  )
}

export default MenuCard