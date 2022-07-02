import Head from "next/head";
import NavBar from "../../components/Navbar";
import Checkout from "../../components/Checkout";
import {Col, Container, Row} from "react-bootstrap";
import CustomerDetails from "../../components/CustomerDetails";
import ShoppingCart from "../../components/ShoppingCart";
import {useUser} from "@auth0/nextjs-auth0";

import axios from "axios";
import {addUser} from "../../redux/user";
import {router} from "next/client";
import {useEffect} from "react";


export default function CheckoutPage() {
    const {user, error, isLoading} = useUser();
    console.log(user)
    useEffect(

        ()=>{
            if(!user){
                router.push('/');
            }
        },[]
    )
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <NavBar showMid={false}/>
            <main>
                <Container >

                    <Row>
                        <Col>
                            <Col className={"mb-3"}>
                                <CustomerDetails name={user.name}/>
                            </Col>
                        </Col>

                        <Col>
                            <div className={"d-flex flex-row justify-content-end"}>
                                <Checkout  />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
