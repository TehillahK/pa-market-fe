import {Card, Button, Image} from "react-bootstrap";
import Link from "next/link";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const FarmCard = (props) => {
  const farm = props.farm;
  return (
    <Link href={`/farms/${farm._id}`} >
      <div className={"d-flex flex-row justify-content-between align-items-center shadow mb-5 bg-body rounded"}
           style={{height:"10rem",width:"90%"}}
      >

        <Image
            className={"justify-content-center"}
            src={"https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?cs=srgb&dl=pexels-pixabay-162240.jpg&fm=jpg"}
            alt={`${farm.name}`}
            fluid={true}
            style={{width:"20rem",height:"8rem",objectFit:"cover",margin:"auto"}}
        />
        <Image
            className={"justify-content-center"}
            src={"https://firebasestorage.googleapis.com/v0/b/pamarket-63297.appspot.com/o/2__1_-removebg-preview.png?alt=media&token=9b4511a6-509a-4f64-a37a-bb1e860337b5"}
            alt={`${farm.name} logo`}
            fluid={true}
            style={{width:"10rem",height:"10rem",objectFit:"cover",margin:"auto"}}
        />

        <div className={"flex-grow-1 ms-3 "} >

            <Card.Title>{farm.name}</Card.Title>

        </div>
        <div className={"flex-grow-1 ms-3  "} >
          <Card.Text>K10 Delivery Fee</Card.Text>
          <Card.Text><FontAwesomeIcon icon={faStar} /> 4.5</Card.Text>
        </div>


      </div>
    </Link>
  );
};

export default FarmCard;
