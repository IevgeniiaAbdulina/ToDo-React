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

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginShow = this.handleLoginShow.bind(this);
        this.handleLoginClose = this.handleLoginClose.bind(this);
    
        this.state = {
          emailUser: "",
          passwordUser: "",
          showLogin: false

        };
    }

    handleLoginShow() {
        console.log("handle login show called");
        this.setState({ showLogin: true});
      }
    
      handleLoginClose() {
        this.setState({ showLogin: false});
    
      }
    
    render() { 
        return ( 
            <div>
                <div>
                    <p>Log</p>
                    <NavLink
                    className="btn"
                    style={buttonStyle}
                    onClick={this.handleLoginShow}
                    >
                    Log In
                    </NavLink>       
                </div>
                <div className="someStrangeModal">
                    <Modal 
                    isOpen={this.state.showLogin}
                    > 
                        <ModalHeader toggle={this.props.onClose} >Log In</ModalHeader>

                        <ModalBody>
                            <Form>
                                <FormGroup id="userNameHidden" row style={nameHidden}>
                                    <Label sm={2}>Name</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="loginUser"
                                        id="loginUserLog"
                                        type="text"
                                        placeholder="Name"
                                        autoComplete="username"
                                        />
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label sm={2}>Email</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="emailUser"
                                        type="emil"
                                        placeholder="Email"
                                        autoComplete="email"
                                        />
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                    <Label sm={2}>Password</Label>

                                    <Col sm={10}>
                                        <Input
                                        name="passwordUser"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                        <Button 
                        color="success" 
                        type="submit"
                        onClick={ this.props.onClose}
                        >
                            Log In
                        </Button>
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

const nameHidden = {
    display: "none"
  };
  
 
export default Login;