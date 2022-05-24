import { Card,Button } from "react-bootstrap";
const FarmCard = (props) => {
  const farm = props.farm;
  return (
    <Card style={{ width: "20rem",height:"5rem" }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?cs=srgb&dl=pexels-pixabay-162240.jpg&fm=jpg" />
      <Card.Body>
        <Card.Title>{farm.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default FarmCard;
