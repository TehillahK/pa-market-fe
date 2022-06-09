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
    SplitButton, Col, Offcanvas, ListGroup
} from "react-bootstrap";
import AddressSetter from "./AddressSetter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReceipt, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import styles from '../styles/Home.module.css'


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a variant="primary" onClick={handleShow} className="me-2">

                <FontAwesomeIcon icon={faUserCircle} style={{fontSize: "1.3rem"}}/>
            </a>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>User Name</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={"d-flex flex-column justify-content-between"}>
                        <Link style={{textDecoration:"none"}}  href={""}>

                            <div className={"d-flex flex-row p-3"}>
                                <FontAwesomeIcon icon={faReceipt}/>
                                <p style={{marginLeft:"1rem"}}> Order History</p>
                            </div>
                        </Link>
                        <Link style={{textDecoration:"none"}} className={"d-flex"} href={""}>
                            <div className={"d-flex flex-row  p-3"}>
                                <FontAwesomeIcon icon={faReceipt}/>
                                <p style={{marginLeft:"1rem"}}> Order History</p>
                            </div>
                        </Link>

                        <Link style={{textDecoration:"none"}} className={"d-flex"} href={""}>
                            <div className={"d-flex flex-row  p-3"}>
                                <FontAwesomeIcon icon={faReceipt}/>
                                <p style={{marginLeft:"1rem"}}> Log out</p>
                            </div>
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

const SortBtn = () => {
  return(
      <NavDropdown title="Sort" id="collasible-nav-dropdown"    >
          <NavDropdown.Item >
              Rating
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>

          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
  )
}



export default function NavBar(props) {
    const userAddress = props.address;
    return (
        <nav className={"pa-nav-bar"}  >
            <Container style={{textDecoration:"none",color:"black"}} className={"justify-content-center align-items-center fw-bold text-black"} fluid>
                <Row className={" d-flex align-items-center"}>
                    <Col sm>
                        <Row >
                            <div className={"d-flex flex-row align-items-center"}>
                                <Link href={"/"}>Logo</Link>
                                <span className={"ms-3"} />
                                <AddressSetter  />
                            </div>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <div className={" d-flex flex-row justify-content-center align-items-center"}>
                            <input
                                className={"shadow rounded\""}
                                placeholder={"Search Farm"}
                                style={{
                                    height: "55px",
                                    width: "80%",
                                    outline: "none",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "0 60px 0 20px",
                                    fontSize: "18px"
                                }}
                            />
                            <SortBtn style={{textDecoration:"none",color:"black"}} />
                        </div>
                    </Col>

                    <Col sm>
                        <div className={"d-flex flex-row justify-content-end "}>

                            <Link style={{textDecoration:"none",color:"black"}} href={"/"}>
                                <OffCanvasExample  placement={'end'} name={'end'}>
                                    <FontAwesomeIcon icon={faUserCircle} style={{fontSize: "1.3rem"}}/>
                                </OffCanvasExample>

                            </Link>

                        </div>
                    </Col>

                </Row>
            </Container>
        </nav>
    );
}
