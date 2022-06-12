import {setFarmID, setFarmName} from "../redux/shoppingcart";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartMobile = () => {
    const dispatch = useDispatch()
    return (
        <div className="position-fixed " style={{marginTop:"15rem",marginLeft:"5rem"}}>
            <Button variant="primary  " size="lg"  style={{borderRadius:"100%"}}
            >
                <FontAwesomeIcon icon={faShoppingCart } />
            </Button>
        </div>
    )
}
export default ShoppingCartMobile;
