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
import AddressSetter from "./AddressSetter";

export default function NavBar(props) {
    const userAddress = props.address;
    return (
        <nav>
            <Container className={"d-flex flex-row justify-content-between align-items-center"}>
                <div className={"d-flex"}>
                    <Link href="/">
                        <a className={"d-inline-flex"}> PaMarket</a>
                    </Link>
                    <Link href={""}>
                        <AddressSetter/>
                    </Link>
                </div>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Link href="/">
                    <a className={"d-inline-flex"}> Settings</a>
                </Link>
            </Container>
        </nav>
    );
}
