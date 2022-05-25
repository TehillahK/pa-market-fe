import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import { Row, Col, Container } from "react-bootstrap";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://127.0.0.1:5000/api/farms`)
  const farms = await res.json()

  // Pass data to the page via props
  return { props: { farms } }
}


export default function Farms({farms}) {

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
          <Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Farms near you</h2>
        <Row xs={1} md={3} className="g-3">
          {farms.map((farm) => {
            return (
              <Col   md={4}>
                <FarmCard key={farm._id} farm={farm} />;
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
