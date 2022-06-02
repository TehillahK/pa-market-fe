import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAddress } from "../redux/user";
import { addFarms } from "../redux/farms";
// Getting data from api ,dont forget to run the python api
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:5000/api/farms`);
  const ufarms = await res.json();



  // Pass data to the page via props
  return { props: { ufarms } };
}

export default function Farms({ ufarms }) {
  // Getting stuff from redux

  const { address } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  dispatch(addFarms(ufarms))
    const { farms } = useSelector((state) => state.farms);
  console.log(address);
  return (
    <div>
      <Head>
        <title>Farms</title>
        <meta name="description" content="Farm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container >
        <h2>Farms near you</h2>
        <Col xs={1} md={1} lg={1} className="justify-content-md-center ">
          {farms.map((farm) => {
            return (
              <div key={farm._id} md={4}>
                <FarmCard  farm={farm} />;
              </div>
            );
          })}
        </Col>
      </Container>
    </div>
  );
}
