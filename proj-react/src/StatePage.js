import React, { useState } from "react";
import StatesNavbar from './StatesNavbar.js';
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
import api from './api'

class StatePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stateName: this.props.stateName,
            smdOpen: true,
        }
        this.state.stateName = this.props.stateName;
        console.log(this.state.stateName);
    }
    render(){
        var styledStateName = this.state.stateName[0].toUpperCase() + this.state.stateName.substring(1);
        return (
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <h1 style={{textAlign: 'center'}}>Welcome to {styledStateName}</h1>
                <Container fluid className="text-center w-100 pb-1">
                    <Row className="gx-3 w-100">
                        <Col xs={9} key = {this.state.smdOpen}>
                            <StateMap stateName = {this.state.stateName} smdOpen = {this.state.smdOpen}/>
                        </Col>
                        <Col>
                            <Card className="bg-dark text-light">
                                <Card.Body>
                                    <Card.Title>Fairness Score</Card.Title>
                                    <Card.Text>
                                        SMD: 100
                                        <br></br>
                                        MMD: 200
                                    </Card.Text>
                                    <Accordion id="fairness-explain">
                                        <Accordion.Item eventKey="fairnessOne">
                                            <Accordion.Header>How is fairness calculated?</Accordion.Header>
                                            <Accordion.Body>
                                                For now, we hypothesize that fairness can be calculated from the average vote conversion percentage. I.E., if there are 10% of republicans
                                                who vote for 6% republican candidates, then we would expect that 6% of candidates would be republican based on their votes. Same thing with
                                                minority groups.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="gx-2">
                        <Col>
                            <Button variant="dark" onClick={() => this.setState((old) => ({smdOpen: !old.smdOpen}))}>Toggle Map</Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <h2>Demographics</h2>
                        </Col>
                        <Col>
                            <h2>SMD/MMD Comparison</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VertChart stateName = {this.state.stateName}/>
                        </Col>
                        <Col>
                            <ComaprisonChart />
                        </Col>
                    </Row>
                </Container>
                <ElectionBar stateName = {this.state.stateName} />

            </div>
        );
    }
}


class ComaprisonChart extends React.Component {



    constructor(props) {
        super(props);
        
        this.state = {
            series: [
                {
                    type: 'boxPlot',
                    data: [
                        {
                            x: 'Dem SMD',
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: 'Dem MMD',
                            y: [30, 36, 49, 55, 68]
                        },
                        {
                            x: 'Rep SMD',
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: 'Rep MMD',
                            y: [44, 75, 79, 82, 87]
                        },
                        {
                            x: 'Black SMD',
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: 'Black MMD',
                            y: [35, 42, 47, 56, 62]
                        },
                        {
                            x: 'White SMD',
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: 'White MMD',
                            y: [29, 36, 45, 55, 61]
                        },
                        {
                            x: 'Hispanic SMD',
                            y: [29, 31, 35, 39, 44]
                        },
                        {
                            x: 'Hispanic MMD',
                            y: [34, 37, 40, 45, 50]
                        },
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'boxPlot',
                    height: 350
                },
                title: {
                    text: 'Votes Converted to Representation (%)',
                    align: 'left'
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: '#5C0000',
                            lower: '#00A5A5'
                        }
                    }
                }
            },

        };
    }

    
    render() {
        

        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
            </div>
        );
    }
}

class VertChart extends React.Component {

    


    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: '',
                data: []
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '90%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"]
                },
                xaxis: {
                    categories: ['Democrat', 'Republican', 'White', 'Black', 'Hispanic', 'Religious', 'Areligious'],
                },
                yaxis: {
                    title: {
                        text: 'Thousands of People'
                    }
                },
                fill: {
                    opacity: 1,
                    colors: ["#d42424", "#3232d1"]
                },
            },
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            
            let currentState = this.props.stateName;
            const data = await api.getStateDemographics( (currentState.charAt(0).toUpperCase() + currentState.slice(1)) );
            
            let demographics = data.data;
            let demographicsArray = [ demographics.democratPopulation, demographics.republicanPopulation, demographics.whitePopulation, demographics.blackPopulation, demographics.hispanicPopulation, demographics.religiousPopulation, demographics.areligiousPopulation];
            console.log(demographicsArray)

            this.setState( {
                series: [{
                    name: '',
                    data: demographicsArray
                }]
            } );
            console.log(this.state.series)
        }
  
        fetchData()
          .catch(console.error);
    };


    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default StatePage;