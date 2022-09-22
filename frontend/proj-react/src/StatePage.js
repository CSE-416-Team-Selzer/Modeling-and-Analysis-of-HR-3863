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

class StatePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stateName: "",
            smdOpen: true,
            statsCarousel: 0,
            smdCompCarousel: 0,
            mmdCompCarousel: 0,
        }
        this.state.stateName = this.props.stateName;
        console.log(this.state.stateName);
    }
    render(){
        var styledStateName = this.state.stateName[0].toUpperCase() + this.state.stateName.substring(1);
        return (
            <div style={{width:"100%"}}>
                <StatesNavbar/>
                <h1 style={{textAlign: 'center'}}>Welcome to {styledStateName}</h1>
                <Container fluid className="text-center w-100 pb-1">
                    <Row className="gx-3 w-100">
                        <Col xs={9}>
                            <StateMap/>
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
                                            Somehow. When we actually figure out a real fairness score, we'll explain it here.
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
                    <Row className="text-center">
                        <h2>Interesting Statistics</h2>
                        <Col>
                        <div>
                            <img src={"images/example-" + (this.state.statsCarousel === 0 ? "political" : (this.state.statsCarousel === 1 ? "ethnic" : "other")) + ".png"} class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{(this.state.statsCarousel === 0 ? "Political" : (this.state.statsCarousel === 1 ? "Ethnic" : "Other")) + " Demographics"}</h5>
                                <p>{this.state.statsCarousel === 0 ? "Demographics of political parties active in the region." : (this.state.statsCarousel === 1 ? "Demographics of the ethnic composition of the state." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" onClick={() => this.setState((old) => ({statsCarousel: (old.statsCarousel+1)%3}))}>Next Statistic</Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="text-center pb-5">
                    <Row className="text-center">
                        <h2>SMD vs MMD Comparison</h2>
                        <Col>
                        <div>
                            <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{this.state.smdCompCarousel === 0 ? "Election Wins for a Party" : (this.state.smdCompCarousel === 1 ? "Ethnic Wins" : "Other Wins")}</h5>
                                <p>{this.state.smdCompCarousel === 0 ? "Box and Whisker of election wins compared to supporters in that region." : (this.state.smdCompCarousel === 1 ? "Demographics of the ethnic composition of the state as compared to the winners of that demographic." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" size="sm" onClick={() => this.setState((old) => ({smdCompCarousel: (old.smdCompCarousel+1)%3}))}>Next Statistic</Button>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{this.state.mmdCompCarousel === 0 ? "Election Wins for a Party" : (this.state.mmdCompCarousel === 1 ? "Ethnic Wins" : "Other Wins")}</h5>
                                <p>{this.state.mmdCompCarousel === 0 ? "Box and Whisker of election wins compared to supporters in that region." : (this.state.mmdCompCarousel === 1 ? "Demographics of the ethnic composition of the state as compared to the winners of that demographic." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" size="sm" onClick={() => this.setState((old) => ({mmdCompCarousel: (old.mmdCompCarousel+1)%3}))}>Next Statistic</Button>
                        </Col>
                    </Row>
                </Container>
                <ElectionBar/>

            </div>
        );
    }
}

export default StatePage;