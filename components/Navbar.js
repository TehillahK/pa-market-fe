import Link from "next/link";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  Form,
  FormControl,
  Container,
  Row,
  SplitButton
} from "react-bootstrap";
export default function NavBar(props) {
  const userAddress = props.address;
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">PaMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <SplitButton title={`Deliver to ${userAddress}`}>
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Form className="justify-content-center d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
