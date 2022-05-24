import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import { Row, Col, Container } from "react-bootstrap";
export default function Farms() {
  const [farms, setFarms] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/farms")
      .then(function (response) {
        // handle success
        setFarms(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log(farms);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Farm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
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
