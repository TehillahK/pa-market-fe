import {Accordion, Button, Card, ListGroup, Modal} from "react-bootstrap";
import styles from '../styles/Home.module.css'
import {useState} from "react";
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";

function VerificationModal(props) {
    const link = props.link;
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen
            scrollable={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe style={{height: "100%", width: "100%", overflow: "hidden"}} src={link} scrolling="no"/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function CardPayment() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
    const textStyle = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        zIndex: "1000"
    }

    const textDateStyle ={
        width: "4rem",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        zIndex: "1000",
        marginRight:"1rem"
    }

    return (
        <form className={"d-flex flex-column justify-content-center align-content-between"} onSubmit={handleSubmit}>
            <div className={"d-flex flex-row"} style={{marginBottom: "1rem"}}>
                <label>
                    Card Number
                    <input
                        type="tel"
                        style={textStyle}
                        value={inputs.username || ""}
                        name="cardnumber"
                        maxLength="19"
                        placeholder="4111111111111111"
                        onChange={handleChange}
                    />
                </label>

            </div>
            <div className={"d-flex flex-row"} style={{marginBottom: "1rem",width:"5rem"}}>
                <label>
                    CVC
                    <input
                        type="text"
                        style={textStyle}

                        name="cvc"

                        placeholder="123"
                        maxLength="4"

                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className={"d-flex flex-row justify-content-center align-items-center"} style={{marginBottom: "1rem",width:"10rem"}}>
                <label>
                    MM
                    <input
                        type="text"
                        style={textDateStyle}

                        name="month"

                        placeholder="08"
                        maxLength="2"

                        onChange={handleChange}
                    />
                </label>

                <label >
                    YY
                    <input
                        type="text"
                        style={textDateStyle}

                        name="year"

                        placeholder="22"
                        maxLength="2"

                        onChange={handleChange}
                    />
                </label>
            </div>
            <OrderDetails className={styles.orderDetails} />
            <input  style={{backgroundColor: "black", color: "white"}} type="submit" value={"Pay Now"} />
        </form>
    )
}

function MobileMoney() {
    const [inputs, setInputs] = useState({
        phoneNum: "",
        network: "MTN"
    });
    const [purchaseLink, setPurchaseLink] = useState("")
    const [modalShow, setModalShow] = useState(false);
    const handleChange = (event) => {
        setInputs(
            {...inputs, [event.target.name]: event.target.value}
        )

    }

    const networkImg = () => {
        if (inputs.network === "MTN") {
            return "https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/MTN-Zambia.png?alt=media&token=a8940938-3c61-4f85-94f0-731a52f877a6"
        } else if (inputs.network === "Airtel") {
            return "https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/Il0mBDbr_400x400.png?alt=media&token=5cd16ebf-be01-4bdf-85af-33de125575b2"
        } else if (inputs.network === "Zamtel") {
            return "https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/1835415.png?alt=media&token=e6ae1da8-d4df-41d9-a975-0c06abeddb13"
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("/api/services/mobilemoney", {
            method: "POST",
            body: JSON.stringify({
                network: inputs.network,
                mobileNumber: inputs.phoneNum,
            }),
        })

        const data = await res.json()
        let result = JSON.parse(data)
        if (result.status === "success") {
            // console.log(result.meta.authorization.redirect)
            setPurchaseLink(result.meta.authorization.redirect)
            setModalShow(true)
        }


    }
    const textStyle = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        zIndex: "1000"
    }

    return (
        <>
            <form className={"d-flex flex-column justify-content-evenly align-content-between"} onSubmit={handleSubmit}>
                <div className={"d-flex flex-row justify-content-center"} style={{marginBottom: "1rem"}}>
                    <div className={"d-flex flex-column justify-content-between align-items-center"}>

                        <label className={"d-flex justify-content-center mt-3  mb-3"}>
                            <Image
                                src={networkImg()}
                                width={25}
                                height={25}
                                objectFit={"scale-down"}
                            /> Network
                            <select value={inputs.network} onChange={handleChange} name="network">
                                <option value="MTN">MTN</option>
                                <option value="Airtel">Airtel</option>
                                <option value="Zamtel">Zamtel</option>

                            </select>
                        </label>
                        <label>
                            <input

                                style={textStyle}
                                type="tel" id="phone"
                                value={inputs.phoneNum}
                                name="phoneNum"
                                maxLength={10}
                                placeholder={"09666666666"}
                                onChange={handleChange}

                            />
                        </label>
                    </div>
                </div>
                <OrderDetails />
                <input style={{backgroundColor: "black", color: "white"}} type="submit" value={"Pay Now"} />
            </form>
            <VerificationModal link={purchaseLink}
                               show={modalShow}
                               onHide={() => setModalShow(false)}

            />
        </>
    )
}

function OrderDetails() {
    return (
        <Accordion className={"mb-3"}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Order Details</Accordion.Header>
                <Accordion.Body>
                    <ShoppingCart showFooter={false}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

const Checkout = () => {
    const [cardPayment, setCardPayment] = useState(true);
    const showMobileMoney = () => setCardPayment(false);
    const showCardPayment = () => setCardPayment(true);
    const btnClicked = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "2rem",
        padding: "1rem",
        textDecoration: "none"
    }
    const btnNotClicked = {padding: "1rem"}
    return (

        <div>
            <Card style={{width:"100%"}}>
                <Card.Body>
                    <Card.Title>Checkout</Card.Title>

                    <div>
                        <h6>Select payment method</h6>
                        <div className={"d-flex flex-row justify-content-evenly mb-3"}>

                            <a
                                style={cardPayment ? btnClicked : btnNotClicked}
                                onClick={
                                    () => showCardPayment()
                                }
                            >

                                Debit/Credit Card
                            </a>
                            <a
                                style={!cardPayment ? btnClicked : btnNotClicked}
                                onClick={
                                    () => showMobileMoney()
                                }
                            >
                                Mobile money
                            </a>

                        </div>
                        <div className={"d-flex flex-column"}>
                            {cardPayment ? <CardPayment/> : <MobileMoney/>}

                        </div>
                    </div>


                </Card.Body>
            </Card>
        </div>

    )
}


export default Checkout;
