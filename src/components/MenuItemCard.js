import React from 'react';
import "./MenuItemCard.css";
import {IMG_CDN_URL} from "../config.js";

const MenuItemCard = (item) => {
    //console.log(name,price,description);
    return (
        <div className="menu-item-card">
            <img 
                src={IMG_CDN_URL+item.imageId}
                alt={item.name }
                className="image"
            />
            <div className="info">
                <h3 className="name">{item.name}</h3>
                <p className="price">₹{item.price}</p>
                <p className="description">{item.description}</p>
            </div>
        </div>
    );
}

export default MenuItemCard;