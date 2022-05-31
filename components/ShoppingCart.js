import Link from "next/link";
import {Button, Card, Col, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import FarmCard from "./FarmCard";
import {useState} from "react";

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

    const farm = props.farm;
    return (
        <Card>
            <Card.Header>
                Shopping Cart
            </Card.Header>
            <Card.Body>
                <ListGroup>
                    {cart.map((item) => {

                        return (
                            <ListGroup.Item key={item}>
                                {`${item.name}  ${item.quantity}${item.quantityType} K${item.cost}`}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                <p>Total Cost {totalCost}</p>
                <div className="d-grid">
                    <Button variant="primary" size="lg">
                    Checkout
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default  ShoppingCart;
