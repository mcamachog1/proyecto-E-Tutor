import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
import "../../styles/registration.css";

export const Registration= () => {
  return (
    <div className="container-fluid fondo">
        <div className="row">
            <Form>
            <Form.Group className="leftForm mb-3 p-2 mt-3" controlId="formBasicFirstName">
                <Form.Label className='textLabel'>First Name</Form.Label>
                <Form.Control type="leftForm" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group className="leftForm mb-3 p-2 mt-3" controlId="formBasicLastName">
                <Form.Label className='textLabel'>Last Name</Form.Label>
                <Form.Control type="leftForm" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group className="leftForm mb-3 p-2 mt-3" controlId="formBasicEmail">
                <Form.Label className='textLabel'>Email</Form.Label>
                <Form.Control type="password" placeholder="Email" />
            </Form.Group>

            <Form.Group className="leftForm mb-3 p-2 mt-3" controlId="formBasicDireccion">
                <Form.Label className='textLabel'>Direccion</Form.Label>
                <Form.Control type="password" placeholder="Direccion" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button className='boton' variant="outline-success" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    </div>
  );
}

export default Registration;