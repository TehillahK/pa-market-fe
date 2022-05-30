import Head from "next/head";
import NavBar from "../../components/Navbar";

import FarmCard from "../../components/FarmCard";
import { Row, Col, Container,Image  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAddress } from "../redux/user";
import { addFarms } from "../redux/farms";
// Getting data from api ,dont forget to run the python api
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch(`http://127.0.0.1:5000/api/farms`);
  const farms = await res.json();
  const paths = farms.map((farm) => {
    return {
      params: { id: farm._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  //const res = await fetch(`http://127.0.0.1:5000/api/farm?id=${id}`);
  //const data = await res.json();
  const resCrops = await fetch(`http://127.0.0.1:5000/api/crops?id=${id}`);
  const dataCrops = await resCrops.json();
  return {
    props: {  crops: dataCrops },
  };
};

export default function Farms({ crops }) {
  // Getting stuff from redux
  const { address } = useSelector((state) => state.user);
  const router = useRouter();
  const { id } = router.query;
  const {farms} = useSelector((state)=> state.farms)
  const farm = farms.filter(
    (farm)=>{
      return farm._id == id
    }
  )
  console.log(farm)
  const farmName = farm[0].name;
  const farmCrops = crops.produce;
  return (
    <div>
      <Head>
        <title>{farmName}</title>
        <meta name="description" content="Farm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>

        <Container>
          <Row>
            <Image src={"https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                   className={"farm-cover-img"}
              rounded={true}
            />
            <h1>{farmName}</h1>
          </Row>
          <Row xs={1} md={1} className="g-3">
            {
              farmCrops.map(
                (crop)=>{
                  return(
                    <div key={crop.name}>
                        {
                          crop.name
                        }
                    </div>

                  )
                }
              )
            }
          </Row>
        </Container>
      </Container>
    </div>
  );
}
