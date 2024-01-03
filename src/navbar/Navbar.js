import burger from "../images/burger.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeStatusToLoggedOut } from "../slices/loginStatusSlice"
import { resetBacon } from "../slices/baconCounterSlice";
import { resetCheese } from "../slices/cheeseCounterSlice";
import { resetLettuce } from "../slices/lettuceCounterSlice";
import { resetMeat } from "../slices/meatCounterSlice";

function Navbar() {
  
  // ls stands for login status
  const ls = useSelector((state) => state.loginstatus.status);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <img src={burger} className="site-iamge" alt="website logo" />
      
      <ul>
          <li className="routerLinks">
            <Link to={"/"} className="navbarBtn">
              Burger builder
            </Link>
          </li>

        {!ls && (
          <li className="routerLinks">
            <Link to={"/login"} className="navbarBtn">
              Login
            </Link>
          </li>
        )}

        {ls && (
          <li className="routerLinks">
          <Link to={"/orders"} className="navbarBtn">
            Orders
          </Link>
          </li>
        )}
        
        {ls && (
        <li className="routerLinks">
          <Link to={"/"} className="navbarBtn" onClick={() => {
            dispatch(changeStatusToLoggedOut());
            dispatch(resetBacon()); 
            dispatch(resetCheese());
            dispatch(resetLettuce());
            dispatch(resetMeat());
          }}>
              Logout
          </Link>
        </li>
        )}
      
      </ul>
    </nav>
  );
}

export default Navbar;
