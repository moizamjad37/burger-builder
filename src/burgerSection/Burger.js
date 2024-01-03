import burgerBunTop from "../images/burgerBunTop.png"
import burgerBunBottom from "../images/burgerBunBottom.png"
import lettuceImage from "../images/lettuce.png"
import baconImage from "../images/bacon.png"
import cheeseImage from "../images/cheese.png"
import meatImage from "../images/meat.png"
import {useSelector} from "react-redux";

function Burger() {

    const lettuce = useSelector((state) => state.lettuce.count);
    const meat = useSelector((state) => state.meat.count);
    const cheese = useSelector((state) => state.cheese.count);
    const bacon = useSelector((state) => state.bacon.count);


    const lettuces = Array.from({ length: lettuce }, (_, index) => (
        <img
          key={index}
          className="image"
          src={lettuceImage}
          alt={`Lettuce ${index + 1}`}
        />
        ));

    const bacons = Array.from({ length: bacon }, (_, index) => (
        <img
          key={index}
          className="image"
          src={baconImage}
          alt={`Bacon ${index + 1}`}
        />
        ));

    const cheeses = Array.from({ length: cheese }, (_, index) => (
        <img
          key={index}
          className="image"
          src={cheeseImage}
          alt={`Cheese ${index + 1}`}
        />
        ));

    const meats = Array.from({ length: meat }, (_, index) => (
        <img
          key={index}
          className="image"
          src={meatImage}
          alt={`Meat ${index + 1}`}
        />
        ));


    return <div className="burgerContainer">     
                <div className="upperBun">
                    <img 
                    src={burgerBunTop} 
                    alt="upper bun" 
                    className="bun-image"
                    />
                </div>
                
                <div className="ingredients">
                    {lettuce === 0 && bacon === 0 && cheese === 0 && meat === 0  ? (
                    <h2>No Ingredients Selected</h2>
                    ) : (
                    <div className="i-sub">
                        <div className="i-i-sub">{lettuces}</div>
                        <div className="i-i-sub">{bacons}</div>
                        <div className="i-i-sub">{cheeses}</div>
                        <div className="i-i-sub">{meats}</div>
                    </div>
                    )}
                </div>
                
                <div className="lowerBun">
                    <img 
                    src={burgerBunBottom} 
                    alt="lower bun" 
                    className="bun-image"
                    />
                </div>
            </div>
}


export default Burger;