import Head from "next/head";
import NavBar from "../../components/Navbar";
import Checkout from "../../components/Checkout";
import {Col, Container, Row} from "react-bootstrap";
import CustomerDetails from "../../components/CustomerDetails";
import ShoppingCart from "../../components/ShoppingCart";
import {useUser} from "@auth0/nextjs-auth0";


import {useEffect, useState} from "react";
import {useRouter} from 'next/router'

export default function CheckoutPage() {
    const {user, error, isLoading} = useUser();
    const router = useRouter()
    useEffect(
        ()=>{
            setTimeout( ()=>{
                if(!user){
                    router.push("/")
                }
            },3000)
        },[user]
    )
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <NavBar showMid={false}/>
            <main>
                <Container >
                    {user&&
                        <Row>
                            <Col>
                                <Col className={"mb-3"}>
                                    <CustomerDetails/>
                                </Col>
                            </Col>

                            <Col>
                                <div className={"d-flex flex-row justify-content-end"}>
                                    <Checkout/>
                                </div>
                            </Col>
                        </Row>
                    }
                    {
                        !user &&<div>You need to sign in</div>
                    }
                </Container>
            </main>
        </>
    )
}
