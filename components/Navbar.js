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
    SplitButton, Col
} from "react-bootstrap";
import AddressSetter from "./AddressSetter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReceipt, faUserCircle} from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
    const userAddress = props.address;
    return (
        <nav className={"pa-nav-bar"}  >
            <Container className={"justify-content-center align-items-center"} fluid>
                <Row className={" d-flex align-items-center"}>
                    <Col sm>
                        <Row >
                            <div className={"d-flex"}>
                                <Link href={"/"}>PaMarket Logo</Link>
                                <span className={"ms-1"} />
                                <AddressSetter  />
                            </div>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row className={" d-flex justify-content-center align-items-center"}>
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
                            <Col sm>
                                Sort
                            </Col>
                        </Row>
                    </Col>

                    <Col sm>
                        <div className={"d-flex flex-row justify-content-end"}>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faReceipt} style={{fontSize: "1.3rem"}}/>
                            </Link>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faReceipt} style={{fontSize: "1.3rem"}}/>
                            </Link>

                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faUserCircle} style={{fontSize: "1.3rem"}}/>
                            </Link>

                        </div>
                    </Col>

                </Row>
            </Container>
        </nav>
    );
}
