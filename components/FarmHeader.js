import {Container ,Image,Modal,Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Farm Description
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



const FarmHeader =(props)=>{
    const [modalShow, setModalShow] = useState(false)
    const farmName = props.name;
    return(
        <div>
            <Image
                src={
                "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                className={"farm-cover-img"}
            />
            <div className={"d-flex align-items-baseline"}>
                <h1 className={"farm-title"} >{farmName}</h1>
                <a href={"#"}
                    className={"farm-info"}
                    style={{fontSize:"1rem",marginLeft:"1rem"}}
                    onClick={() => setModalShow(true)}
                >
                    more info <FontAwesomeIcon icon={faCircleInfo} />
                </a>
            </div>
            <div className={"farm-description d-inline-flex"}>

                <ul className={"d-inline-flex farm-meta"}>
                    <li>Address</li>
                    <li>K10 Delivery Fee</li>
                    <li>4.5 Rating</li>
                </ul>

            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default FarmHeader;

