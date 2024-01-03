import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Orders = () => {
  const userEmail = useSelector((state) => state.useremail.email);
  const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
  const user = storedUsers[userEmail];
  
  return (
    <div className="order-section-container">
      {user.orders.map((order) => (
        <div className="order-container">
          <div className="ingredients-container">
            <p className="ingredients-title">Ingredients: </p>
            <p className="ingredients-container-item">Lettuce &#40;{order.items[0]}&#41;</p>
            <p className="ingredients-container-item">Bacon &#40;{order.items[1]}&#41;</p>
            <p className="ingredients-container-item">Cheese &#40;{order.items[2]}&#41;</p>
            <p className="ingredients-container-item">Meat &#40;{order.items[3]}&#41;</p>
          </div>
          <p className="price-title">Price <b>USD {order.items[4]}</b></p>
        </div>
      ))}
    </div>
  )
}
