import {setFarmID, setFarmName} from "../redux/shoppingcart";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import ShoppingCart from "./ShoppingCart";

function ShowCart(props) {
    const show = props.show ;
    return (
        <Modal show={show} fullscreen={"lg-down"} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    )
}


const ShoppingCartMobile = () => {
    const dispatch = useDispatch()
    const {cart, totalCost} = useSelector((state) => state.cart);
    const numCartItems = cart.length;
    const [show, setShow] = useState(false);

    function handleShow() {

        setShow(true);
    }


    return (
        <>
            <div className="position-fixed " style={{bottom: "2rem", right: "1rem"}}>
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
                <Button variant="primary  " style={{borderRadius: "100%", height: "4rem", width: "4rem"}} onClick={
                    () => handleShow()
                }>
                    <FontAwesomeIcon icon={faShoppingCart} size={"lg"}/>
                </Button>
            </div>
            <Modal show={show} fullscreen={"lg-down"} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingCart showFooter={true} />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ShoppingCartMobile;
