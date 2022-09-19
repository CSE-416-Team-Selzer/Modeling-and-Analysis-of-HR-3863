import React, { useState } from "react";
import StatesNavbar from './StatesNavbar.js';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function StatePage() {
    const params = useParams();
    const stateName = params.stateName;
    const styledStateName = stateName[0].toUpperCase() + stateName.substring(1);
    
    const [smdOpen, setSMDOpen] = useState(true);
    const [statsCarousel, setStatsCarousel] = useState(0);
    const [smdCompCarousel, setSMDCompCarousel] = useState(0);
    const [mmdCompCarousel, setMMDCompCarousel] = useState(0);

    const map = <Col id={(smdOpen ? "s" : "m") + "md-" + stateName}>
                    <img src={"images/" + stateName + "placeholder" + (smdOpen ? "" : "2") + ".jpg"} alt={(smdOpen ? "S" : "M") + "MD Map of " + styledStateName} class="img-fluid w-50"></img>
                    <p class="lead">{(smdOpen ? "S" : "M") + "MD Map of " + styledStateName}</p>
                </Col>;

    return (
        <div>
            <StatesNavbar />
            <h1 style={{textAlign: 'center'}}>Welcome to {styledStateName}</h1>
            <Container className="text-center">
                <Row className="gx-3">
                    {map}
                    <Col>
                        <Card className="bg-dark text-light">
                            <Card.Body>
                                <Card.Title>Fairness Score</Card.Title>
                                <Card.Text>
                                    SMD: {Math.floor(Math.random() * 50)}
                                    <br></br>
                                    MMD: {Math.floor(Math.random() * 100) + 50}
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
                        <Button variant="dark" onClick={() => setSMDOpen(!smdOpen)}>Toggle Map</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Row className="text-center">
                    <h2>Interesting Statistics</h2>
                    <Col>
                        <div>
                            <img src={"images/example-" + (statsCarousel === 0 ? "political" : (statsCarousel === 1 ? "ethnic" : "other")) + ".png"} class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{(statsCarousel === 0 ? "Political" : (statsCarousel === 1 ? "Ethnic" : "Other")) + " Demographics"}</h5>
                                <p>{statsCarousel === 0 ? "Demographics of political parties active in the region." : (statsCarousel === 1 ? "Demographics of the ethnic composition of the state." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" onClick={() => setStatsCarousel((statsCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Row className="text-center">
                    <h2>SMD vs MMD Comparison</h2>
                    <Col>
                        <div>
                            <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{smdCompCarousel === 0 ? "Election Wins for a Party" : (smdCompCarousel === 1 ? "Ethnic Wins" : "Other Wins")}</h5>
                                <p>{smdCompCarousel === 0 ? "Box and Whisker of election wins compared to supporters in that region." : (smdCompCarousel === 1 ? "Demographics of the ethnic composition of the state as compared to the winners of that demographic." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" size="sm" onClick={() => setSMDCompCarousel((smdCompCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                    <Col>
                        <div>
                            <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
                            <div class="d-none d-md-block">
                                <h5>{mmdCompCarousel === 0 ? "Election Wins for a Party" : (mmdCompCarousel === 1 ? "Ethnic Wins" : "Other Wins")}</h5>
                                <p>{mmdCompCarousel === 0 ? "Box and Whisker of election wins compared to supporters in that region." : (mmdCompCarousel === 1 ? "Demographics of the ethnic composition of the state as compared to the winners of that demographic." : "Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'")}</p>
                                <br></br>
                            </div>
                        </div>
                        <Button variant="dark" size="sm" onClick={() => setMMDCompCarousel((mmdCompCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default StatePage;