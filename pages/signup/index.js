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
import RegisterUser from "../../components/RegisterUser";
import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from 'next/router'
// Getting data from api ,dont forget to run the python api


export default function Signup() {
    // Getting stuff from redux
    const bg = "/sign-bg.jpg"
    const {user, error, isLoading} = useUser();

    return (
        <>
            <Head>
                <title>Finish sign up</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={"d-flex flex-column "} style={{backgroundColor: "white",height:"5rem"}}>
                <NavBar />
            </header>
            <main className={"d-flex justify-content-lg-center  align-items-center  mt-2"} style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",height:"100vh",backgroundSize:"cover"}}>
                <span style={{marginBottom:"5rem"}}  />
                <div style={{backgroundColor:"white",position:"relative",top:"5px",borderRadius:"1rem",marginLeft:"5rem"}} className={"d-flex flex-column  align-items-center mb-3 p-3"}>
                        <h1 className={"mb-3"}>Primary Address</h1>
                        <p>This is the address your goods will be dropped off</p>
                        <RegisterUser email={user.email}/>
                </div>
                <span style={{marginBottom:"5rem"}}  />
            </main>
        </>
    );
}
