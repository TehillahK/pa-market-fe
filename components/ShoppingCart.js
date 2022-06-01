import Link from "next/link";
import {Button, Card, Col, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FarmCard from "./FarmCard";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleInfo,faStar ,faTruck,faTrash} from '@fortawesome/free-solid-svg-icons'
import {removeCartItem} from "../pages/redux/shoppingcart";

function CartItems(props){
    const cart = props.cart;
    return(
    <ListGroup>
        {cart.map((cartItem) => {
            return (
                <ListGroup.Item key={cartItem}>
                    ${`${item.name}  ${item.quantity}${item.quantityType} K${item.cost}`}
                </ListGroup.Item>
            );
        })}
    </ListGroup>
    )
}

const ShoppingCart= (props) => {
    const { cart,totalCost } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const farm = props.farm;
    return (
        <Card>
            <Card.Header>
                Shopping Cart
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {cart.map((item) => {

                        return (cart&&
                            <ListGroup.Item key={item} >
                                <div className={"d-flex justify-content-between align-items-center"}>
                                    <div className={"d-flex flex-column"}>
                                        <h4>{item.name} </h4>
                                        <div style={{lineHeight:"0.5rem",paddingLeft:"1.5rem",fontSize:"1rem"}} className={"d-flex flex-column align-items-start"}>
                                            <p>Product description</p>
                                            <p>{item.quantity}{item.quantityType}</p>
                                            <p>price K{item.cost} </p>
                                        </div>
                                    </div>
                                    <Button variant="link"
                                            onClick={
                                                ()=>{
                                                   dispatch(removeCartItem(item.id))
                                                }
                                            }
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                {totalCost>0 &&<p>Total Cost K{totalCost}</p>

                }

                <div style={{marginTop:"1rem"}} className="d-grid">
                    <Button variant="primary" size="lg">
                    Checkout
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default  ShoppingCart;
