import Link from "next/link";
import {Button, Card, Image, Modal} from "react-bootstrap";
import {useState} from "react";

function CropSelector(props) {
    const [amount,setAmount]= useState(1);
    const [cost ,setCost] = useState(2)
    const crop = props.crop;
    const increase = ()=>{
        let currAmount = amount
        setAmount(++currAmount)
        setCost(2*currAmount)
    }
    const decrease =()=>{
        let currAmount = amount
        if (currAmount>1){
            setAmount(--currAmount)
            setCost(2*currAmount)
        }

    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {crop.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image
                    src={"https://images.pexels.com/photos/42164/pexels-photo-42164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    style={{height:"20rem",width:"100%",marginBottom:"2rem",objectFit:"cover"}}
                    fluid={true}
                />
                <div className={"d-flex justify-content-center"}>
                    <button onClick={()=>{
                        decrease()
                    }}>-</button>
                    <p>{amount} kg</p>
                    <button onClick={()=>{
                        increase()
                    }}>+</button>
                </div>
                <div className="d-grid">
                    <Button variant="primary" size="lg">
                        K{cost} Add to Cart
                    </Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={
                  ()=>props.onHide()

                }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const CropCard= (props) => {
    const [cropShow, setCropShow] = useState(false)
    const crop = props.crop;

    return (
        <>
        <a
            href={"#"}
            className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded"}
            style={{height:"10rem"}}
            onClick={
                ()=>{
                    setCropShow(true)
                }
            }
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

        </a>
            <CropSelector
                show = {cropShow}
                onHide={()=>setCropShow(false)}
                crop ={crop}
            />
        </>
    );
};
export default CropCard;
