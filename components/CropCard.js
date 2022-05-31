import Link from "next/link";
import {Button, Card, Image, Modal} from "react-bootstrap";
import {useState} from "react";

function CropSelector(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
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
                <Button onClick={
                  ()=>props.onHide

                }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const CropCard= (props) => {
    const [cropShow, setCropShow] = useState(false)
    const crop = props.crop;
    const toggleOff = ()=> setCropShow(false)
    return (
        <a
            href={"#"}
            className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded"}
            style={{height:"10rem"}}
            onClick={() => setCropShow(!cropShow)}
        >
            <div className={"d-flex flex-column justify-content-center  p-3 "} style={{width:"21rem"}}>
                <Card.Title>{crop.name}</Card.Title>
            </div>
            <Image
                className={"justify-content-center"}
                src={"https://images.pexels.com/photos/42164/pexels-photo-42164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt={`${crop.name}`}
                fluid={true}
                style={{width:"8rem",height:"8rem",objectFit:"cover",margin:"auto"}}
            />
            <CropSelector
                show = {cropShow}
                onHide={()=>setCropShow(!setCropShow)} />
        </a>
    );
};
export default CropCard;
