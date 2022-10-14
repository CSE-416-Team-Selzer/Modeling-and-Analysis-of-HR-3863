import React from "react";
import StatesNavbar from './StatesNavbar.js';
import HomeMap from './HomeMap.js';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import StateMap from "./StateMap.js";
import ElectionBar from "./ElectionBar.js";
import Chart from 'react-apexcharts';
import SpecificElection from "./SpecificElection.js";


export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <StatesNavbar/>
                <Container fluid className="text-center">
                    <Row>
                        <Col>
                            <h2>Welcome to the HR3863 Bill Statistics Page</h2>
                            <p>
                                To view a state, select one from the dropdown menu on the navigation bar or simply click on it from the map of the United States. Currently, we only have
                                support for Texas, Utah and Arizona.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HomeMap/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}