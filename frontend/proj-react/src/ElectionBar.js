import React from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Chart from 'react-apexcharts';
import SpecificElection from "./SpecificElection";
import Representative from "./Representative";

class ElectionBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        candidateList: [
          {name: "Muhammad Amin", flavor: "Middle Eastern Republican Representative", img: "https://randomuser.me/api/portraits/men/23.jpg"},
          {name: "Paul Whistler", flavor: "White Democratic Representative", img: "https://randomuser.me/api/portraits/men/10.jpg"},
          {name: "Steven Miller", flavor: "White Democratic Representative", img: "https://randomuser.me/api/portraits/men/32.jpg"},
          {name: "George Estevez", flavor: "Hispanic Democratic Representative", img: "https://randomuser.me/api/portraits/men/12.jpg"}
        ],
        electionViewCandidate: null,
        electionViewLetter: "S",
      }
      this.state.electionViewCandidate = this.state.candidateList[0];
    }
    render(){
        return (
            <div className="text-center pt-2 pb-2 w-100">
                <Container fluid>
                    <Row>
                        <Col>
                            <h2 className="lead">SMD Election</h2>
                        </Col>
                        <Col>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>How are these votes tabulated?</Accordion.Header>
                            <Accordion.Body>
                              For the SMD election, these votes are the typical 'first past the post' votes, where every vote is tabulated individually. For the MMD election, the votes listed
                              are the ones that have 'waterfalled' from people's second and third choices. As a result, there are more votes represented on the MMD side than the SMD side.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        </Col>
                        <Col>
                            <h2 className="lead">MMD Simulated Election</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Representative name={this.state.candidateList[0].name} flavor={this.state.candidateList[0].flavor} img ={this.state.candidateList[0].img}/> 
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                        <Col>
                        <ApexBarChartOne/>
                        </Col>
                        <Col>
                        <ApexBarChartTwo/>
                        </Col>
                        <Col>
                            <Representative name={this.state.candidateList[1].name} flavor={this.state.candidateList[1].flavor} img={this.state.candidateList[1].img}/>
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Representative name={this.state.candidateList[2].name} flavor={this.state.candidateList[2].flavor} img ={this.state.candidateList[2].img}/> 
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                        <Col>
                        <ApexBarChartOne/>
                        </Col>
                        <Col>
                          
                        <ApexBarChartTwo/>
                        </Col>
                        <Col>
                            <Representative name={this.state.candidateList[3].name} flavor={this.state.candidateList[3].flavor} img={this.state.candidateList[3].img}/>
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                    </Row>
                </Container>
                <SpecificElection rep={this.state.electionViewCandidate} s={this.state.electionViewLetter}/>
            </div>
        )
    }
}

class ApexBarChartOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [200, 430, 448, 100]
      }],
      options: {
        chart: {
          type: 'bar',
          width: "100%",
          height: 100
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Democrat', 'Republican', 'White', 'Black',
          ],
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}

class ApexBarChartTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [700, 330, 448, 350]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 100
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Democrat', 'Republican', 'White', 'Black',
          ],
        },
        yaxis: {
          reversed: true,
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
      </div>
    );
  }
}


export default ElectionBar;