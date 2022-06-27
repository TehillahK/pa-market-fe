import {Button, Card} from "react-bootstrap";
import {useState} from "react";

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
            <div className={"d-flex flex-row"} style={{marginBottom:"1rem"}}>

                    <input
                        type="text"
                        style={{width:"100%"}}
                        value={inputs.username || ""}
                        name="cardnumber"


                        maxLength="19"
                        placeholder="1111-2222-3333-4444"
                        onChange={handleChange}
                    />

            </div>
            <div className={"d-flex flex-row"} style={{marginBottom:"1rem"}}>
                <label>
                    <input
                        type="text"
                        style={{width:"100%"}}

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
    return(
        <div>
            Mobile money
        </div>
    )
}

const Checkout = () => {
    const [cardPayment, setCardPayment] = useState(true);
    const showMobileMoney = ()=> setCardPayment(false);
    const showCardPayment = ()=> setCardPayment(true);
    const btnClicked ={backgroundColor:"black", color:"white",borderRadius:"2rem",padding:"1rem"}
    const btnNotClicked ={padding:"1rem"}
    return (
        <div>
            <Card style={{width: "30rem"}}>
                <Card.Body>
                    <Card.Title>Checkout</Card.Title>
                    <div>
                        <h6>Select payment method</h6>
                        <div className={"d-flex flex-row justify-content-evenly mb-3"}>

                            <a
                                   style={cardPayment?  btnClicked:btnNotClicked}
                                    onClick={
                                        ()=>showCardPayment()
                                    }
                            >
                                Debit/Credit Card
                            </a>
                            <a
                                style={!cardPayment?  btnClicked:btnNotClicked}
                                onClick={
                                    ()=>showMobileMoney()
                                }
                            >
                                Mobile money
                            </a>

                        </div>
                        <div>
                            {cardPayment?<CardPayment />:<MobileMoney />}

                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}


export default Checkout;
