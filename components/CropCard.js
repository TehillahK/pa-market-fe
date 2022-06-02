import Link from "next/link";
import {Button, Card, Image, Modal} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCartItem} from "../pages/redux/shoppingcart";
import CropSelector from "./CropSelector";




const CropCard= (props) => {
    const [cropShow, setCropShow] = useState(false)
    const crop = props.crop;

    return (
        <>
        <a

            className={"d-flex flex-row justify-content-between shadow mb-5 bg-body rounded"}
            style={{height:"10rem"}}
            onClick={
                ()=>{
                    setCropShow(true)
                }
            }
        >
            <div className={"d-flex flex-column justify-content-center  p-3 "} style={{width:"90%"}}>
                <Card.Title>{crop.name}</Card.Title>
                <Card.Text>Description of kind of crop</Card.Text>
                <Card.Text>Price per kg</Card.Text>
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
