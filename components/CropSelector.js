import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Image, Modal} from "react-bootstrap";
import {addCartItem} from "../redux/shoppingcart";

const CropSelector = (props) => {
    const crop = props.crop;
    const price = crop.price;
    const [amount, setAmount] = useState(1);
    const [cost, setCost] = useState(price)
    const dispatch = useDispatch()


    const increase = () => {
        let currAmount = amount
        setAmount(++currAmount)
        setCost(price * currAmount)
    }
    const decrease = () => {
        let currAmount = amount
        if (currAmount > 1) {
            setAmount(--currAmount);
            setCost(price * currAmount);
        }
    }
    const createCartItem = (quantity, quantityType, cost, name) => {
        return {id: crop._id.$oid, "name": name, "quantity": quantity, "quantityType": quantityType, "cost": cost}
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {crop.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image
                    src={"https://images.pexels.com/photos/42164/pexels-photo-42164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    style={{height: "20rem", width: "100%", marginBottom: "2rem", objectFit: "cover"}}
                    fluid={true}
                />
                <div className={"d-flex flex-row justify-content-evenly align-items-center mb-4 "}>
                    <Button variant="dark" onClick={() => {
                        decrease()
                    }}>-
                    </Button>
                    <p>{amount} {crop.priceUnit}</p>
                    <Button variant="dark" onClick={() => {
                        increase()
                    }}>+
                    </Button>
                </div>
                <div className="d-grid">
                    <Button  variant="dark" size="lg"
                            onClick={
                                () => {
                                    const cartItem = createCartItem(amount, "kg", cost, crop.name)
                                    dispatch(addCartItem(cartItem))
                                    props.onHide()
                                }
                            }
                    >
                        K{cost} Add to Cart
                    </Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={
                    () => props.onHide()

                }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CropSelector;
