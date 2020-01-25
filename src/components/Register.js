import React from 'react';

import {
    NavLink, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Form,
    Col,
    Label,
    Input,
    Button
  } from "reactstrap";

class Register extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loginUser: "",
          emailUser: "",
          passwordUser: ""
        };
    
        this.onChange = this.onChange.bind(this);
      }

    onChange = e => {
        const inputName = e.target.name;
        const value = e.target.value;

        this.setState({
            [inputName]: value
        });

        e.preventDefault();
    };




    render() { 
        return ( 
            <div>
                <p>Reg</p>

                <NavLink
                  className="btn"
                  style={buttonStyle}
                >
                  Register
                </NavLink>

                <div>
                    <Modal>
                        <ModalHeader>Register</ModalHeader>

                        <ModalBody>
                            <Form>
                                
                                <FormGroup row>
                                    <Label sm={2}>Name</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="loginUser"
                                        id="loginUser"
                                        type="text"
                                        placeholder="Name"
                                        autoComplete="username"
                                        onChange={this.onChange}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm={2}>Email</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="emailUser"
                                        id="emailUser"
                                        type="emil"
                                        placeholder="Email"
                                        autoComplete="email"
                                        onChange={this.onChange}

                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm={2}>Password</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="passwordUser"
                                        id="passwordUser"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        onChange={this.onChange}

                                        />
                                    </Col>
                                </FormGroup>

                            </Form>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="success" type="submit">Register</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
         );
    }
}

const buttonStyle = {
    color: "#fff"
  };
 
export default Register;