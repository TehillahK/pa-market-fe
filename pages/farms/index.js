import axios from "axios";
import {useEffect, useState} from "react";
import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import {Row, Col, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeAddress} from "../../redux/user";
import {addFarms} from "../../redux/farms";
import AdsCarousel from "../../components/AdsCarousel";
import styles from "../../styles/Home.module.css";

// Getting data from api ,dont forget to run the python api
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://127.0.0.1:5000/api/farms`);
    const ufarms = await res.json();


    // Pass data to the page via props
    return {props: {ufarms}};
}

export default function Farms({ufarms}) {
    // Getting stuff from redux

    const {address} = useSelector((state) => state.user);
    const dispatch = useDispatch()
    dispatch(addFarms(ufarms))
    const {farms} = useSelector((state) => state.farms);
    console.log(address);
    return (
        <div>
            <Head>
                <title>Farms</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header style={{backgroundColor: "white"}}>
                <NavBar/>
            </header>
            <main className={"bg-app"}>


                <Container className={"d-flex flex-column justify-content-center flex-nowrap "}>
                    <Row style={{width: "92%"}}>
                        <AdsCarousel/>
                    </Row>
                </Container>
                <span/>
                <Container className={"justify-content-center"}>
                    <h2 style={{marginTop: "1rem"}}>Farms near you</h2>
                    <Row className="d-flex flex-column justify-content-center flex-nowrap ">
                        {farms.map((farm) => {
                            console.log(farm._id.$oid)
                            return (
                                <Row key={farm._id} md={4} className={"mb-2"}>
                                    <FarmCard farm={farm}/>
                                </Row>
                            );
                        })}
                    </Row>
                </Container>

            </main>
        </div>
    );
}
