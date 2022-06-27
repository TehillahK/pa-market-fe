import Head from "next/head";
import NavBar from "../../components/Navbar";
import Checkout from "../../components/Checkout";
import {Container} from "react-bootstrap";


export default function CheckoutPage() {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <NavBar/>
            <main>
                <Container >
                    <div className={"d-flex flex-row justify-content-end"}>
                        <Checkout />
                    </div>
                </Container>
            </main>
        </>
    )
}
