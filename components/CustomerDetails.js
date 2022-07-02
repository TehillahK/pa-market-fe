import {ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useUser} from "@auth0/nextjs-auth0";

const CustomerDetails = (props) => {
    const {user} = useSelector((state) => state.user);
    const {cart, totalCost} = useSelector((state) => state.cart);
    const userName = props.name;
    const userAddress = user.address[0];
    return (
        <ListGroup>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>Name</p>
                    <p>{userName}</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>email</p>
                    <p>{user.email}</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className={"d-flex flex-row justify-content-between align-items-center"}>
                    <p>Address</p>
                    <p>{user.houseNum} , {userAddress.streetName}, {userAddress.city}</p>
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
                    <p>k{totalCost}</p>
                </div>
            </ListGroup.Item>


        </ListGroup>
    )
}
export default CustomerDetails;
