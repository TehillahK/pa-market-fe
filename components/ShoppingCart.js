import Link from "next/link";
import {Button, Card, Col, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FarmCard from "./FarmCard";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faCircleInfo, faStar, faTruck, faTrash} from '@fortawesome/free-solid-svg-icons'
import {removeCartItem, setFarmID, setFarmName} from "../redux/shoppingcart";
import CropSelector from "./CropSelector";
import {useFlutterwave, closePaymentModal} from 'flutterwave-react-v3';
import {useUser} from "@auth0/nextjs-auth0";

const ShoppingCart = (props) => {
    const {user, error, isLoading} = useUser();
    const [cropShow, setCropShow] = useState(false)
    const {cart, totalCost} = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const farm = props.farm;

    const config = {
        public_key: 'FLWPUBK_TEST-487b3d1a05cb4f50efea589657e344da-X',
        tx_ref: Date.now(),
        amount: totalCost,
        currency: 'ZMW',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: "useremail@gmail.com",
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
        },
        customizations: {
            title: 'my Payment Title',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };
    const handleFlutterPayment = useFlutterwave(config);

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

                    <div style={{marginTop: "1rem"}} className="d-grid">
                        <Link

                            href={"/checkout"}

                        >
                            <Button variant="primary"  size={"lg"} >
                                Checkout
                            </Button>
                        </Link>
                        <div style={{marginTop: "1rem"}}>
                            {totalCost > 0 && <p>Total K{totalCost}</p>}
                            <div className={"d-flex align-items-baseline"}>
                                <p>Discount code</p>
                                <input style={{height: "1.5rem", width: "7rem"}}/>
                                <button>get discount</button>
                            </div>
                            <strong>Total does not include delivery fees.</strong>

                        </div>
                    </div>
                </Card.Body>
            </Card>

        </>
    );
};

export default ShoppingCart;
