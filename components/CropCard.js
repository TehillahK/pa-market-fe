import Link from "next/link";
import {Button, Card, Image, Modal} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCartItem} from "../redux/shoppingcart";
import CropSelector from "./CropSelector";


const CropCard = (props) => {
    const [cropShow, setCropShow] = useState(false)
    const crop = props.crop;
    const photoUrl = crop.photoUrl;
    return (
        <>
            <a

                className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded mx-auto"}
                style={{height: "10rem",width: "100%",textDecoration:"none"}}
                onClick={
                    () => {
                        setCropShow(true)
                    }
                }
            >
                <div className={"d-flex flex-column justify-content-center  p-3 "} style={{width: "100%"}}>
                    <Card.Title>{crop.name}</Card.Title>
                    <Card.Text>Description of kind of crop</Card.Text>
                    <Card.Text> K {crop.price} per kg</Card.Text>
                </div>
                <Image
                    className={"justify-content-center"}
                    src={photoUrl}
                    alt={`${crop.name}`}
                    fluid={true}
                    style={{width: "8rem", height: "8rem", objectFit: "cover", margin: "auto"}}
                />

            </a>
            <CropSelector
                show={cropShow}
                onHide={() => setCropShow(false)}
                crop={crop}
            />
        </>
    );
};
export default CropCard;
