import { Card, Button } from "react-bootstrap";
import Link from "next/link";
const FarmCard = (props) => {
  const farm = props.farm;
  return (
    <Link href={`/farms/${farm._id}`} passHref>
      <Card border="primary" style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?cs=srgb&dl=pexels-pixabay-162240.jpg&fm=jpg"
        />
        <Card.Body>
          <Card.Title>{farm.name}</Card.Title>
          <Card.Text>Some quick example content.</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default FarmCard;
