import { Dropdown } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
const AddressSetter = (props) => {
  return (
      
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
  );
};

export default AddressSetter;
