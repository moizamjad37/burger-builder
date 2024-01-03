import React from 'react'
import Burger from '../burgerSection/Burger'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import {useSelector} from "react-redux"; 

export function DeliveryAddress() {
  const navigate = useNavigate();
  const deliveryMethods = ["Fastest", "Cheapest"];
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [addressDetails, setAddressDetails ] = useState(false);
  const isOrderButtonDisabled = !name || !address || !zipcode || !country || !email;
  const userEmail = useSelector((state) => state.useremail.email);
  const lettuceCount = useSelector((state) => state.lettuce.count);
  const meatCount = useSelector((state) => state.meat.count);
  const cheeseCount = useSelector((state) => state.cheese.count);
  const baconCount = useSelector((state) => state.bacon.count);
  const los = useSelector((state) => state.loginstatus.status);

  function handleCancel() {
    return navigate("/");
  };

  function handleContinue() {
    return setAddressDetails(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
  }

  function handleOrder() {
      // Get the existing users from local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
  
      // Find the user based on the email
      const userToUpdate = storedUsers[userEmail];
  
      if (userToUpdate) {
        // Generate a new order and add it to the user's orders array
        const newOrder = {
          orderId: new Date().getTime(), // Unique ID for the order
          items: [lettuceCount, baconCount, cheeseCount, meatCount, (3 + lettuceCount*0.5 + baconCount*0.7 + cheeseCount*0.4 + meatCount*1.3).toFixed(2)],
        };
        userToUpdate.orders.push(newOrder);
  
        // Update the user's information in the local storage
        localStorage.setItem('users', JSON.stringify(storedUsers));
        navigate("/")
      }
    
    return;
  };

  return (
  los ? (
  <>
    <div className="da-page-container">
      <h1 className="tastes-well-test"> We hope it tastes well!</h1>
      <Burger></Burger>
      <div>  
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="continue-button" onClick={handleContinue}>Continue</button>
      </div>
    </div>
    
    {addressDetails && (
    <div className="formContainer">  
      <form className="form2" onSubmit={handleSubmit} >
        <h2 className="form2-title"> Enter your Contact Data</h2>
        <input type="name" placeholder="Your Name" value={name} className="input-item" onChange={(e) => setName(e.target.value)} />
        <input type="address" placeholder="Street" value={address} className="input-item" onChange={(e) => setAddress(e.target.value)} />
        <input type="zipcode" placeholder="Zip Code" value={zipcode} className="input-item" onChange={(e) => setZipcode(e.target.value)} />
        <input type="country" placeholder="Country" value={country} className="input-item" onChange={(e) => setCountry(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} className="input-item" onChange={(e) => setEmail(e.target.value)} />
        <select className="select-item">
          {
          deliveryMethods.map(deliveryMethod => {
            return <option>{deliveryMethod}</option>
          })
          }
        </select>

        <button 
        type="submit" 
        id="order-button"
        disabled={isOrderButtonDisabled} 
        onClick={handleOrder}
        >ORDER</button>

      </form>
    </div>

    )}
  </>
  ) : (navigate("/"))
  )
}
