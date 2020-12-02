import * as React from "react";
import Routes from "./Routes";
import NavBarComponent from "../components/NavBarComponent";
import LeftNavBarMenu from "../components/LeftNavBarMenu";
import {Col, Container, Row} from "react-bootstrap";

type Props = {}

type State = {}

class MainPage extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <NavBarComponent/>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <LeftNavBarMenu/>
                        </Col>
                        <Col md={9}>
                            <LeftNavBarMenu/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default MainPage;