import {Button, Dropdown, ListGroup, NavDropdown, NavItem, NavLink} from "react-bootstrap";
import {useState, createContext, useContext} from "react";
import {
    faArrowCircleDown,
    faArrowDown,
    faMapLocation, faMapMarked, faMapMarkedAlt,
    faMapPin, faMapSigns,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddNewAddress from "./AddNewAddress";
import {useSelector} from "react-redux";

function DropDownMenu(props) {
    const [addAddressClicked, setAddressClicked] = useState(false)
    const changeClickStatus = props.changeClickStatus;
    const newDropStatus = props.newDropStatus;
    return (
        <>
            <ListGroup.Item className={"d-flex flex-row"} as={Button}
                            onClick={
                                () => {
                                    changeClickStatus(false)
                                    newDropStatus(true)
                                }
                            }
            >

                Add new address

            </ListGroup.Item>
            <ListGroup.Item>

                <label className={"d-flex flex-row  justify-content-between"} style={{lineHeight: "0.2rem"}}>
                    <FontAwesomeIcon icon={faMapMarked}/>
                    <div>
                        <p>63rd 10th Street</p>
                        <p>Chingola,Zambia</p>
                    </div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                </label>

            </ListGroup.Item>
            <ListGroup.Item>
                <label className={"d-flex flex-row  justify-content-between"} style={{lineHeight: "0.2rem"}}>
                    <FontAwesomeIcon icon={faMapMarked}/>
                    <div>
                        <p>63rd 10th Street</p>
                        <p>Chingola,Zambia</p>
                    </div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                </label>
            </ListGroup.Item>
        </>
    )
}

const DropDown2 = () => {
    const {user} = useSelector((state) => state.user)

    const primaryAddress= `${user.address[0].houseNum} ${user.address[0].streetName}`
    console.log(primaryAddress)
  //  const userAddress = `${address}`
  return(
      <Dropdown as={NavItem} autoClose={"outside"}>
          <Dropdown.Toggle  style={{textDecoration:"none",color:"black"}} className={"fw-bold "} as={NavLink}>

                Deliver to {primaryAddress}<br/>at time ASAP

          </Dropdown.Toggle>
          <Dropdown.Menu >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
  )
}

const AddressSetter = (props) => {
    const [newAddressClicked, setNewAddressClicked] = useState(false)
    const [addressClicked, setAddressClicked] = useState(false);
    const changeDropStatus = (status) => setAddressClicked(status);
    const newDropStatus = (status) => setNewAddressClicked(status)
    return (
        <>
      {/*  <div style={{marginLeft:"0.5rem"}} className={"d-flex flex-column"}>

            <a
                className={"d-flex flex-column  "}
                style={{lineHeight:"0.4rem"}}
                onClick={
                    () => {
                        setAddressClicked(!addressClicked);
                    }
                }
            >
                <p  className={"fw-bold "}>Deliver to  Address</p>
                <p className={"fw-bold "}>at Time &#x25bc;</p>
            </a>

            <ListGroup className="form-check" style={{position: "absolute", marginTop: "1.3rem", width: "15rem"}}>
                {addressClicked && <DropDownMenu changeClickStatus ={changeDropStatus} newDropStatus = {newDropStatus} />
                }
            </ListGroup>


        </div>
            <AddNewAddress
                show={newAddressClicked}
                onHide={
                () => {
                    newDropStatus(false)
                }
            }
            />*/}
            <DropDown2 />
        </>
    );
};

export default AddressSetter;
