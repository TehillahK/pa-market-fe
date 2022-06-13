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
import {useState} from "react";
import {addCrops} from "../../redux/crops";
import {useMediaQuery} from "react-responsive";
import ShoppingCartMobile from "../../components/ShoppingCartMobile";

export const getStaticPaths = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/farms`);
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
    const res = await fetch(`http://127.0.0.1:5000/api/farm?id=${id}`);
    const data = await res.json();
    // const resCrops = await fetch(`http://127.0.0.1:5000/api/crops?id=${id}`);
    //const dataCrops = await resCrops.json();
    //const dataCr
    return {
        props: {farm: data},
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
    console.log(farm)
    dispatch(addCrops(farmCrops))
    return (
        <div>
            <Head>
                <title>{farmName}</title>
                <meta name="description" content="Farm"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar/>
            <FarmHeader name={farmName}/>

            <Container fluid>
                <Row>
                    { !isMobile &&
                        <Col xs={1}>
                            <FarmCropNav/>
                        </Col>
                    }
                    <Col>
                        <Container fluid>
                            <Row className={"justify-content-center mx-auto"}>
                                <Col lg={7} md={10}>

                                    <Row className={"mx-auto justify-content-center"}>
                                        {farmCrops != null && farmCrops.map((crop) => {
                                            return <CropCard key={crop.name} crop={crop}/>;
                                        })}
                                    </Row>
                                </Col>
                                <Col xs lg="5">
                                    {!isMobile ? <ShoppingCart farm={farm}/> : <ShoppingCartMobile/>}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
