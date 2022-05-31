import Link from "next/link";
import {Button,Card} from "react-bootstrap";

const ShoppingCart= (props) => {
    const farm = props.farm;
    return (
        <Card>
            <Card.Header>
                Shopping Cart
            </Card.Header>
            <Card.Body>
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
