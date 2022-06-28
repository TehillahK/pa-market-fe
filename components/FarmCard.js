import {Card, Button} from "react-bootstrap";
import Link from "next/link";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
const MobileCard = (props) => {
    const farm = props.farm;
    return (
        <Link className={"d-none  "} href={`/farms/${farm._id.$oid}`} passHref>
            <div
                className={"d-flex flex-row justify-content-between align-items-center shadow mb-5 bg-body rounded p-3"}
                style={{height: "10rem", width: "100%"}}
            >

                <Image
                    className={"justify-content-center"}
                    src={farm.photoUrl}
                    alt={`${farm.name}`}
                    fluid={true}
                    // style={{width: "20rem", height: "8rem", objectFit: "cover", margin: "auto"}}
                    height={128}
                    width={320}
                    objectFit={"cover"}
                />
                <Image
                    className={"justify-content-center"}
                    src={farm.logoUrl}
                    alt={`${farm.name} logo`}
                    fluid={true}
                    //  style={{width: "10rem", height: "10rem", objectFit: "cover", margin: "auto"}}
                    width={160}
                    height={160}
                />

                <div className={"flex-grow-1 ms-3 "}>

                    <Card.Title>{farm.name}</Card.Title>

                </div>
                <div className={"flex-grow-1 ms-3  "}>
                    <Card.Text>K10 Delivery Fee</Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faStar}/> 4.5</Card.Text>
                </div>


            </div>
        </Link>
    )
}
const DesktopCard = (props) => {
    const farm = props.farm;
    return (
        <Link style={{textDecoration:"none"}}  className={"mx-auto d-none "} href={"/"}>
            <Card style={{width: "100%"}}>
                <Card.Img variant="top"
                          src={farm.photoUrl} />
                <Card.Body>
                    <div className={"d-flex flex-row  align-items-center "}>
                        <Card.Title>{farm.name}</Card.Title>
                    </div>
                    <Card.Text>K10 Delivery Fee</Card.Text>
                    <Card.Text><FontAwesomeIcon icon={faStar}/> 4.5</Card.Text>

                </Card.Body>
            </Card>
        </Link>
    )
}
function CardWrapper(props) {
    const farm = props.farm;
    const isMobile = useMediaQuery('(min-width:800px)');
    return(
        <>
            {
                isMobile && <MobileCard farm={farm} />
            }
            {
                !isMobile && <DesktopCard farm={farm} />
            }
        </>
    )
}

const FarmCard = (props) => {

    const farm = props.farm;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            { mounted&&
                <CardWrapper farm={farm}/>
            }
        </>
    );
};

export default FarmCard;
