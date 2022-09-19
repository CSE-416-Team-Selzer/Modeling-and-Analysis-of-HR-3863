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

    const map = (smdOpen) ? (<Col id={"smd-" + stateName}>
                            <img src={"images/" + stateName + "placeholder.jpg"} alt={"SMD Map of " + styledStateName} class="img-fluid w-50"></img>
                            <p class="lead">SMD Map of {styledStateName}</p>
                            </Col>)
                            : (<Col id={"mmd-" + stateName}>
                                <img src={"images/" + stateName + "placeholder2.png"} alt={"MMD Map of " + styledStateName} class="img-fluid w-50"></img>
                                <p class="lead">MMD Map of {styledStateName}</p>
                            </Col>);

    const stats = (statsCarousel === 0) ? (<div>
        <img src="images/example-political.png" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Political Demographics</h5>
            <p>Demographics of political parties active in the region.</p>
            <br></br>
        </div>
    </div>) : ((statsCarousel === 1) ? (<div>
        <img src="images/example-ethnic.png" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Ethnic Demographics</h5>
            <p>Demographics of the ethnic composition of the state.</p>
            <br></br>
        </div>
    </div>) : (<div>
        <img src="images/example-other.png" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Other Demographics</h5>
            <p>Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'</p>
            <br></br>
        </div>
    </div>));

    const smdComp = (smdCompCarousel === 0) ? (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Election Wins for a Party</h5>
            <p>Box and Whisker of election wins compared to supporters in that region.</p>
            <br></br>
        </div>
    </div>) : ((smdCompCarousel === 1) ? (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Ethnic Wins</h5>
            <p>Demographics of the ethnic composition of the state as compared to the winners of that demographic.</p>
            <br></br>
        </div>
    </div>) : (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Other Wins</h5>
            <p>Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'</p>
            <br></br>
        </div>
    </div>));

    const mmdComp = (mmdCompCarousel === 0) ? (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Election Wins for a Party</h5>
            <p>Box and Whisker of election wins compared to supporters in that region.</p>
            <br></br>
        </div>
    </div>) : ((mmdCompCarousel === 1) ? (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Ethnic Wins</h5>
            <p>Demographics of the ethnic composition of the state as compared to the winners of that demographic.</p>
            <br></br>
        </div>
    </div>) : (<div>
        <img src="images/example-whisker.jpg" class="w-50" alt=""></img>
        <div class="d-none d-md-block">
            <h5>Other Wins</h5>
            <p>Other interesting demographics; Here pictured are some fake numbers for 'Religiousness.'</p>
            <br></br>
        </div>
    </div>));

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
                        {stats}
                        <Button variant="dark" onClick={() => setStatsCarousel((statsCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Row className="text-center">
                    <h2>SMD vs MMD Comparison</h2>
                    <Col>
                        {smdComp}
                        <Button variant="dark" size="sm" onClick={() => setSMDCompCarousel((smdCompCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                    <Col>
                        {mmdComp}
                        <Button variant="dark" size="sm" onClick={() => setMMDCompCarousel((mmdCompCarousel+1)%3)}>Next Statistic</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default StatePage;