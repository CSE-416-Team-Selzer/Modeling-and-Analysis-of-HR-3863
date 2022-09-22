import React from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Chart from 'react-apexcharts';
import Representative from "./Representative";

class SpecificElection extends React.Component {
    // rep struct passed as a prompt
    constructor(props){
      super(props);
      this.state = {

      }
    }
    render(){

        return(
            <div className="text-center pt-2 pb-2 w-100">
                <Container fluid>
                    <Row>
                        <h1>{this.props.s}MD Election of {this.props.rep.name}</h1>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SpecificElection;