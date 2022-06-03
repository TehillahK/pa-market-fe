import {Dropdown, ListGroup} from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import {
    faArrowCircleDown,
    faArrowDown,
    faMapLocation, faMapMarked, faMapMarkedAlt,
    faMapPin, faMapSigns,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
function DropDownMenu() {
    return(
        <>
            <ListGroup.Item className={"d-flex flex-row"}>
                Add new address
            </ListGroup.Item>
            <ListGroup.Item className={"d-flex flex-row  justify-content-between"}>
                <FontAwesomeIcon icon={faMapMarked} />
                <div style={{lineHeight:"0.2rem"}}>
                    <p>63rd 10th Street</p>
                    <p>Chingola,Zambia</p>
                </div>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </ListGroup.Item>
            <ListGroup.Item className={"d-flex flex-row  justify-content-between"}>
                <FontAwesomeIcon icon={faMapMarked} />
                <div style={{lineHeight:"0.2rem"}}>
                    <p>63rd 10th Street</p>
                    <p>Chingola,Zambia</p>
                </div>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </ListGroup.Item>
        </>
    )
}

const AddressSetter = (props) => {
    const [addressClicked,setAddressClicked] = useState(false)
  return (
   <div className={"d-flex flex-column"}>

           <a
           onClick={
               ()=>{
                   setAddressClicked(!addressClicked)
               }
           }
           >Address<FontAwesomeIcon icon={faArrowDown}/>
           </a>
           <ListGroup className="form-check" style={{position:"absolute",marginTop:"1.3rem",width:"15rem"}}>
               {addressClicked&& <DropDownMenu />
               }
           </ListGroup>


   </div>
  );
};

export default AddressSetter;
