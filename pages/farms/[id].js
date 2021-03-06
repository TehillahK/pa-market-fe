import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import {Row, Col, Container, Image} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeAddress} from "../../redux/user";
import {addFarms} from "../../redux/farms";
// Getting data from api ,dont forget to run the python api
import {useRouter} from "next/router";
import ShoppingCart from "../../components/ShoppingCart";
import FarmHeader from "../../components/FarmHeader";
import FarmCropNav from "../../components/FarmCropNav";
import CropCard from "../../components/CropCard";
import {useEffect, useState} from "react";
import {addCrops} from "../../redux/crops";
import {useMediaQuery} from "react-responsive";
import ShoppingCartMobile from "../../components/ShoppingCartMobile";

export const getStaticPaths = async () => {
    const res = await fetch(`https://hammerhead-app-an67q.ondigitalocean.app/api/farms`);
    const farms = await res.json();
    const paths = farms.map((farm) => {
        return {
            params: {id: farm._id.$oid.toString()},
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://hammerhead-app-an67q.ondigitalocean.app/api/farm?id=${id}`);
    const data = await res.json();
    // const resCrops = await fetch(`http://127.0.0.1:5000/api/crops?id=${id}`);
    //const dataCrops = await resCrops.json();
    //const dataCr
    return {
        props: {farm: data},
        revalidate: 60,
    };
};

export default function Farms({farm, crops}) {

    // Getting stuff from redux
    const {address} = useSelector((state) => state.user);
    const router = useRouter();
    const {id} = router.query;
    // const {farms} = useSelector((state)=> state.farms)
    const dispatch = useDispatch()
    //console.log(farm)
    const farmName = farm.name;
    const farmCrops = farm.crops;

    const isMobile = useMediaQuery({query: `(max-width: 800px)`})
    dispatch(addCrops(farmCrops))

    return (
        <>
            <Head>
                <title>{farmName}</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar showMid={true} />
            <FarmHeader name={farmName}/>
            <main className={""}>
                <Container fluid>
                    <Row>
                        {
                            <Col className={"d-none d-sm-block"} xs={1}>
                                <FarmCropNav/>
                            </Col>
                        }
                        <Col>
                            <>
                                <Row className={"justify-content-lg-center mx-auto"}>
                                    <Col lg={7} md={10}>

                                        <Row className={"mx-auto justify-content-center"}>
                                            {farmCrops != null && farmCrops.map((crop) => {
                                                return <CropCard key={crop.name} crop={crop}/>;
                                            })}
                                        </Row>
                                    </Col>
                                    <Col className={"d-none d-sm-block"} xs lg="5">
                                        <ShoppingCart farm={farm} showFooter={true}/>
                                    </Col>
                                    <Col className={"d-block d-sm-none"} xs lg="5">
                                        {<ShoppingCartMobile/>}
                                    </Col>
                                </Row>
                            </>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
