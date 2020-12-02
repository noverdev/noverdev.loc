import * as React from "react";
import {Button, Form, FormControl, Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

type Props = {}

type State = {}

class NavBarComponent extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">NoverDev</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem>
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to={"/admin"}>Admin Panel</Link>
                            </NavItem>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBarComponent;