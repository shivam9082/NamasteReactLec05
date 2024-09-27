import React from 'react';
import MenuList from "./MenuList.js"
import "../../index.css";



const MenuItemCard = ({data,showItems,setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            {/* accordion header */}
            <div className=' w-6/12 mx-auto my-4 bg-grey-100 shadow-lg p-4 '>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='text-lg font-bold'>{data.title+"  "}({ data.itemCards.length})</span>
                <span>🔽</span>
                {/* accordion body */}
                </div>
                   { showItems && <MenuList items={data.itemCards}/>}
                </div>
        </div>
    );
}
export default MenuItemCard;