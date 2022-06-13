import {setFarmID, setFarmName} from "../redux/shoppingcart";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartMobile = () => {
    const dispatch = useDispatch()
    const {cart, totalCost} = useSelector((state) => state.cart);
    const numCartItems = cart.length;
    console.log("cart")
    console.log(cart.length)
    return (
        <div className="position-fixed " style={{bottom:"2rem", right:"1rem"}}>
            <div className={"d-flex flex-direction justify-content-center align-items-center text-bold"} style={{
                backgroundColor: "red",
                color: "white",
                width: "2rem",
                height: "2rem",
                borderRadius: "100%",
                position: "absolute",
                left: "2.5rem",
                top: "-0.5rem"
            }}>{numCartItems}
            </div>
            <Button variant="primary  " style={{borderRadius: "100%", height: "4rem", width: "4rem"}}>
                <FontAwesomeIcon icon={faShoppingCart} size={"lg"}/>
            </Button>
        </div>
    )
}
export default ShoppingCartMobile;
