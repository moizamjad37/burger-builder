import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {incrementLettuce, decrementLettuce} from "../slices/lettuceCounterSlice"
import {incrementMeat, decrementMeat} from "../slices/meatCounterSlice"
import {incrementCheese, decrementCheese} from "../slices/cheeseCounterSlice"
import {incrementBacon, decrementBacon} from "../slices/baconCounterSlice"

function Ingredients() {
    // los short for login status
    const los = useSelector((state) => state.loginstatus.status);
    const lettuceCount = useSelector((state) => state.lettuce.count);
    const meatCount = useSelector((state) => state.meat.count);
    const cheeseCount = useSelector((state) => state.cheese.count);
    const baconCount = useSelector((state) => state.bacon.count);
    const dispatch = useDispatch();
    const navigate = useNavigate();
        

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        if (los) {setIsPopupOpen(true)}
        else {navigate("/login")}
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    function handleContinue()  {
        return navigate("/delivery-address");
    };


    return <div className="ingredientsContainer">
        <div className="price">
            <h1 className="price text1">Current price: $
                <span>
                    {(3 + lettuceCount*0.5 + baconCount*0.7 + cheeseCount*0.4 + meatCount*1.3).toFixed(2)}
                </span>
            </h1>
        </div>

        <div className="lettuce">
            <h3>Lettuce</h3>
            <button className="btn lessButton" disabled={lettuceCount === 0} onClick ={() => dispatch(decrementLettuce())}>Less</button>
            <button className="btn moreButton" onClick ={() => dispatch(incrementLettuce())}>More</button>
        </div>
        
        <div className="bacon">
            <h3>Bacon</h3>
            <button className="btn lessButton" disabled={baconCount === 0} onClick={() => dispatch(decrementBacon())}>Less</button>
            <button className="btn moreButton" onClick={() => dispatch(incrementBacon())}>More</button>
        </div>
        
        <div className="cheese">
            <h3>Cheese</h3>
            <button className="btn lessButton" disabled={cheeseCount === 0} onClick={() => dispatch(decrementCheese())}>Less</button>
            <button className="btn moreButton" onClick={() => dispatch(incrementCheese())}>More</button>
        </div>
        
        <div className="meat">
            <h3>Meat</h3>
            <button  className="btn lessButton" disabled={meatCount === 0} onClick={() => dispatch(decrementMeat())}>Less</button>
            <button className="btn moreButton" onClick={() => dispatch(incrementMeat())}>More</button>
        </div>
        
        <div className="order">
            
        <button
            disabled={lettuceCount === 0 && baconCount === 0 && cheeseCount === 0 && meatCount === 0}
            className="orderButton"
            onClick={handleOpenPopup}
            >
            {los ? "ORDER NOW" : "SIGN UP TO ORDER"}
        </button>

            {isPopupOpen && (
            <div className="popup-overlay">
                <div className="popup-content">
                    <h3 className="popup-item">Your order summary</h3>
                    <ul className="popup-item">
                        <li className="popup-list-item">Lettuce : {lettuceCount}</li>
                        <li className="popup-list-item">Bacon : {(baconCount)}</li>
                        <li className="popup-list-item">Cheese : {(cheeseCount)}</li>
                        <li className="popup-list-item">meat : {(meatCount)}</li>
                    </ul>
                    <h3 className="popup-item">Total price : ${(3 + lettuceCount*0.5 + baconCount*0.7 + cheeseCount*0.4 + meatCount*1.3).toFixed(2)}</h3>
                    <h3 className="popup-item">Continue to checkout ?</h3>
                    <div className="popup-item">   
                         <button className="close-popup" onClick={handleClosePopup}>Cancel</button>
                         <button className="continue-button" onClick={handleContinue}>Continue</button>
                    </div>
                </div>
            </div>
            )}

        </div>
    </div>
}


export default Ingredients;