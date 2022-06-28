import {Accordion, Button, Card, ListGroup, Modal} from "react-bootstrap";
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
                <iframe  style={{height:"100%",width:"100%",overflow:"hidden"}} src={link} scrolling="no"/>
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

    return (
        <form className={"d-flex flex-column justify-content-evenly align-content-between"} onSubmit={handleSubmit}>
            <div className={"d-flex flex-row"} style={{marginBottom: "1rem"}}>

                <input
                    type="text"
                    style={{width: "100%"}}
                    value={inputs.username || ""}
                    name="cardnumber"


                    maxLength="19"
                    placeholder="1111-2222-3333-4444"
                    onChange={handleChange}
                />

            </div>
            <div className={"d-flex flex-row"} style={{marginBottom: "1rem"}}>
                <label>
                    <input
                        type="text"
                        style={{width: "100%"}}

                        name="cardnumber"


                        maxLength="19"
                        placeholder="1111-2222-3333-4444"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <input type="submit"/>
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

                        <label className={"d-flex justify-content-center  mb-3"}>
                            <Image
                                src={"https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/MTN-Zambia.png?alt=media&token=a8940938-3c61-4f85-94f0-731a52f877a6"}
                                width={20}
                                height={20}
                                objectFit={"cover"}
                            /> Network
                            <select value={inputs.network} onChange={handleChange} name="network">
                                <option value="MTN">MTN</option>
                                <option value="Airtel">Airtel</option>
                                <option value="Zamtel">Zamtel</option>

                            </select>
                        </label>
                        <label>
                            <input
                                type=""
                                style={textStyle}
                                ype="tel" id="phone"
                                value={inputs.phoneNum}
                                name="phoneNum"
                                maxLength={10}
                                placeholder={"09666666666"}
                                onChange={handleChange}

                            />
                        </label>
                    </div>
                </div>
                <OrderDetails/>
                <input style={{backgroundColor: "black", color: "white"}} type="submit" value={"Pay Now"}/>
            </form>
            <VerificationModal  link={purchaseLink}
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
            <Card style={{width: "30rem"}}>
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
