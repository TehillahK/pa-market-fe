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
import {useMediaQuery} from "react-responsive";

// Getting data from api ,dont forget to run the python api


export default function Farms({ufarms}) {
    // Getting stuff from redux


    return (
        <div>
            <Head>
                <title>Finish sign up</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={"d-flex flex-column"} style={{backgroundColor: "white",height:"6rem"}}>
                <NavBar/>
            </header>
            <main>
                <div className={"d-flex justify-content-center"}>

                </div>
            </main>
        </div>
    );
}
