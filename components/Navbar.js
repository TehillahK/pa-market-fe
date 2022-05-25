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
} from "react-bootstrap";
export default function NavBar() {
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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Address
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
