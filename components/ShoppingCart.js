import Link from "next/link";
import {Button, Card, Col, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FarmCard from "./FarmCard";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faCircleInfo, faStar, faTruck, faTrash} from '@fortawesome/free-solid-svg-icons'
import {removeCartItem, setFarmID, setFarmName} from "../redux/shoppingcart";
import CropSelector from "./CropSelector";
import {useUser} from "@auth0/nextjs-auth0";

const ShoppingCart = (props) => {
    const {user, error, isLoading} = useUser();
    const [cropShow, setCropShow] = useState(false)
    const {cart, totalCost} = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const farm = props.farm;
    const showFooter = props.showFooter;


    return (
        <>
            <Card>
                <Card.Header>
                    Shopping Cart
                </Card.Header>
                <Card.Body>
                    <ListGroup>
                        {cart.map((item) => {

                            return (cart &&
                                <ListGroup.Item key={item} onClick={
                                    () => {
                                        setCropShow(true)
                                    }
                                }>
                                    <div className={"d-flex justify-content-between align-items-center"}>
                                        <div className={"d-flex flex-column"}>
                                            <h4>{item.name} </h4>
                                            <div style={{lineHeight: "0.5rem", paddingLeft: "1.5rem", fontSize: "1rem"}}
                                                 className={"d-flex flex-column align-items-start"}>
                                                <p>Product description</p>
                                                <p>{item.quantity}{item.quantityType}</p>
                                                <p>price K{item.cost} </p>
                                            </div>
                                        </div>
                                        <Button variant="link"
                                                onClick={
                                                    () => {
                                                        dispatch(removeCartItem(item.id))
                                                    }
                                                }
                                        >
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                    {showFooter &&
                        <div style={{marginTop: "1rem"}} className="d-grid">
                            <Link

                                href={"/checkout"}

                            >
                                <Button  variant="dark" size={"lg"}>
                                    Checkout
                                </Button>
                            </Link>

                            <div style={{marginTop: "1rem"}}>
                                {totalCost > 0 && <p>Total K{totalCost}</p>}

                                <strong>Total does not include delivery fees.</strong>

                            </div>

                        </div>
                    }
                </Card.Body>
            </Card>

        </>
    );
};

export default ShoppingCart;
