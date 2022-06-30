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
import CategoryList from "../../components/CategoryList";
import {useUser} from "@auth0/nextjs-auth0";

// Getting data from api ,dont forget to run the python api
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://hammerhead-app-an67q.ondigitalocean.app/api/farms`);
    const ufarms = await res.json();


    // Pass data to the page via props
    return {props: {ufarms}};
}


export default function Farms({ufarms}) {
    const {user, error, isLoading} = useUser();


    // Getting stuff from redux
    const [searchTxt, setSearchTxt] = useState("")
    const {address} = useSelector((state) => state.user);
    const dispatch = useDispatch()
    dispatch(addFarms(ufarms))
    const {farms} = useSelector((state) => state.farms);

    const isMobile = useMediaQuery({query: `(max-width: 800px)`})
    const findFarms = (farms, name) => {

        return farms.filter(
            (farm) => {
                if (name === "") {
                    return farm
                } else if (farm.name.toLowerCase().includes(name.toLowerCase())) {
                    return farm;
                }
            }
        )
    }
    return (
        <div>
            <Head>
                <title>Farms</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={"d-flex flex-column "} style={{backgroundColor: "white", height: "6rem"}}>
                <NavBar showMid={true} update={(txt) => setSearchTxt(txt)}/>
                <input
                    className={"d-block d-sm-none shadow rounded "}
                    placeholder={"Search Farm"}
                    style={{
                        height: "55px",
                        width: "100%",
                        outline: "none",
                        border: "none",
                        borderRadius: "5px",
                        padding: "0 60px 0 20px",
                        fontSize: "18px"
                    }}
                    onChange={
                        event => setSearchTxt(event.target.value)
                    }
                />

            </header>
            <main className={"bg-app mb-3"}>


                <Container className={"d-flex flex-column justify-content-center flex-nowrap mx-auto "}>
                    <Row className={"mx-auto"} style={{width: "98%"}}>
                        <AdsCarousel className={"mx-auto"}/>
                    </Row>
                </Container>
                <span/>
                <Container className={"justify-content-center"}>
                    <h2 style={{marginTop: "1rem"}}>Farms near you</h2>
                    <Row lg={1} className="mx-auto justify-content-center ">
                        {findFarms(farms, searchTxt).map((farm) => {
                            return (
                                <Col md={"auto"} key={farm._id.$oid} className={"mx-auto mb-2"}>
                                    <FarmCard farm={farm}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>

            </main>
        </div>
    );
}
