import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useSearchParams } from 'react-router'
const FoodItem = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt=""  className="food-item-image"/>
        {!itemCount  
        ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt=''/> 
        : <div className='food-item-counter'>
            <img src={assets.remove_icon_red} alt=""  onClick={() => setItemCount(prev => prev-1)} />
            <p>{itemCount}</p>
            <img  src={assets.add_icon_green} alt="" onClick={() => setItemCount(prev => prev+1)} />
        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
