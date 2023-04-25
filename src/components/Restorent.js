import React, { useState } from 'react'
import Menu from './MenuAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar'
import './menuCard.css';

const uniqueList = [...new Set(Menu.map((curEle)=>{
  return curEle.category;
})
),
"All",
];

const Restorent = () => {
    const [menuData, setData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) =>{
      if(category=== "All"){
        setData(Menu);
        return
      }

      const updatedList = Menu.filter((curEle) =>{
        return curEle.category === category;
      });
      setData(updatedList);
    };
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Restorent