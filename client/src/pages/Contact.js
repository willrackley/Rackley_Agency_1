import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "../pages/style.css"

class Contact extends Component {

    state={
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        time: "",
        message: "",
        contactCheck: {
            firstName: "",
            lastName: "",
            phone: "",
            email:"",
            message: "",
            time: ""
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleEmailSubmission = () => {

        if (this.state.firstName === "") {
            this.setState({contactCheck: {firstName: "red"}})
            return;
        }
        if (this.state.lastName === "") {
            this.setState({contactCheck: {lastName: "red"}})
            return;
        }
        if (this.state.email=== "") {
            this.setState({contactCheck: {email: "red"}})
            return;
        }
        if (this.state.phone === "") {
            this.setState({contactCheck: {phone: "red"}})
            return;
        }
        if (this.state.time === "") {
            this.setState({contactCheck: {time: "red"}})
            return;
        }
        if (this.state.message === "") {
            this.setState({contactCheck: {message: "red"}})
            return;
        }
        
        window.open(`mailto:bud@email.address?subject=I would like more info about the Rackley Agency&body=${this.state.message}%0d%0a %0d%0a${this.state.firstName} ${this.state.lastName} %0d%0a${this.state.phone}%0d%0a${this.state.email}%0d%0a I would like to be reached at ${this.state.time}`)
        this.setState({firstName: "", lastName:"", phone: "", email:"", message: "", time: ""})
    }

    render () {
        return(
            <div>
                {/* Navbar */}
                <Navbar className="navbar" style={{paddingLeft: "30px", paddingRight: "40px" }} expand="lg">
                <Navbar.Brand className="p-3 text-white" href="/">Rackley Agency</Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

                <h2 className="text-center mt-5">Lets Talk!</h2>

                <div className="row mb-5 px-5">
                    <div className="col-md-5 my-auto">
                        <Image 
                            src="https://images.squarespace-cdn.com/content/v1/5e2e084307cb53265ca906ad/1580085134609-X6SHD44NKAFP3ULZ98PA/ke17ZwdGBToddI8pDm48kKTWOBoFM5hwFyNWb8YMpHJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTDPwdn57Gn-HbWQWWdiK6y17-nr9cEZnrjYSdy7vZ0YW07ycm2Trb21kYhaLJjddA/sfg+logo.png?format=500w"
                            alt="symmetry logo"
                            
                            fluid
                        />
                        <h4 className="text-center"> Rackley Agency</h4>
                        <h5 className="text-center font-italic mt-3">We look forward to hearing from you!</h5>
                    </div>

                   
                    <div className="col-md-7 py-5">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="" name="firstName" style={{borderColor: this.state.contactCheck.firstName}} value={this.state.firstName} onChange={this.handleInputChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="" name="lastName" style={{borderColor: this.state.contactCheck.lastName}} value={this.state.lastName} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="" style={{borderColor: this.state.contactCheck.email}} name="email" value={this.state.email} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Row className="w-50">
                                <Form.Group as={Col} controlId="formGridAreaCode">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="" style={{borderColor: this.state.contactCheck.phone}} name="phone" value={this.state.phone} onChange={this.handleInputChange}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Requested time to be contacted</Form.Label>
                                <Form.Control type="text" placeholder="6:00pm" name="time" value={this.state.time} style={{borderColor: this.state.contactCheck.time}} onChange={this.handleInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="4" name="message" style={{borderColor: this.state.contactCheck.message}} value={this.state.message} onChange={this.handleInputChange}/>
                            </Form.Group>


                            <Button 
                            variant="primary" 
                            
                            onClick={()=>this.handleEmailSubmission()}
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

                {/* footer */}
                <div className="p-3 mt-5" style={{borderTop:"1px solid #07A0C3"}}>
                    <h5 className="text-center text-muted">Rackley Agency &copy;2020</h5>
                </div>
            </div>
        )
    }
}

export default Contact;