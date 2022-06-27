import {ListGroup} from "react-bootstrap";

const CustomerDetails = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>Name</p>
                    <p>John Doe</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>email</p>
                    <p>johndoe@email.com</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>Delivery time</p>
                    <p>ASAP</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>Amount</p>
                    <p>k50</p>
                </div>
            </ListGroup.Item>


        </ListGroup>
    )
}
export default CustomerDetails;
