import Head from "next/head";
import NavBar from "../../components/Navbar";
import Checkout from "../../components/Checkout";
import {Col, Container, Row} from "react-bootstrap";
import CustomerDetails from "../../components/CustomerDetails";
import ShoppingCart from "../../components/ShoppingCart";


export default function CheckoutPage() {
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
                                <CustomerDetails />
                            </Col>
                            <Col>
                                <ShoppingCart showFooter={false} />
                            </Col>
                        </Col>

                        <Col>
                            <div className={"d-flex flex-row justify-content-end"}>
                                <Checkout />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
