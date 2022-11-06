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
import api from './api'

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
        electionViewEnabled: true,
      }
      this.state.electionViewCandidate = this.state.candidateList[0];
    }
    onClickShowMore(candidate, letter){
      this.setState({electionViewCandidate: candidate, electionViewLetter: letter, electionViewEnabled: false});
    }
    onClickElectionBack = () => {
      this.setState({electionViewEnabled: true});
    }
    render(){
      for(let cand in this.state.candidateList){
        
      }
      return (
            <div className="text-center pt-2 pb-2 w-100">
              { this.state.electionViewEnabled ? 
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
                            <Button variant="dark" size="sm" onClick={()=>this.onClickShowMore(this.state.candidateList[0], "S")}>Show More</Button>
                        </Col>
                        <Col>
                        <SMDVotesChart/>
                        </Col>
                        <Col>
                        <MMDVotesChart/>
                        </Col>
                        <Col>
                            <Representative name={this.state.candidateList[1].name} flavor={this.state.candidateList[1].flavor} img={this.state.candidateList[1].img}/>
                            <br/>
                            <Button variant="dark" size="sm" onClick={()=>this.onClickShowMore(this.state.candidateList[1], "M")}>Show More</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Representative name={this.state.candidateList[2].name} flavor={this.state.candidateList[2].flavor} img ={this.state.candidateList[2].img}/> 
                            <br/>
                            <Button variant="dark" size="sm" onClick={()=>this.onClickShowMore(this.state.candidateList[2], "S")}>Show More</Button>
                        </Col>
                        <Col>
                        <SMDVotesChart/>
                        </Col>
                        <Col>
                          
                        <MMDVotesChart/>
                        </Col>
                        <Col>
                            <Representative name={this.state.candidateList[3].name} flavor={this.state.candidateList[3].flavor} img={this.state.candidateList[3].img}/>
                            <br/>
                            <Button variant="dark" size="sm" onClick={()=>this.onClickShowMore(this.state.candidateList[3], "M")}>Show More</Button>
                        </Col>
                    </Row>
                </Container> :
                <SpecificElection rep={this.state.electionViewCandidate} s={this.state.electionViewLetter} cBack={this.onClickElectionBack}/> }
            </div>
        )
    }
}

class SMDVotesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: []
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
  componentDidMount() {
    const fetchData = async () => {
        

        const data = await api.getPlanWinners("dummy_smd_1")
        
        let voters = data.data[0].voterDemographic;
        let votersArray = [voters.democratVotes, voters.republicanVotes, voters.whiteVotes, voters.blackVotes];
        console.log(votersArray)

        this.setState( {
            series: [{
                name: '',
                data: votersArray
            }]
        } );
        
    }

    fetchData()
      .catch(console.error);
  };
  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={250} />
      </div>
    );
  }
}

class MMDVotesChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: []
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

    componentDidMount() {
      const fetchData = async () => {
          

          const data = await api.getPlanWinners("dummy_mmd_1")
          
          let voters = data.data[0].voterDemographic;
          let votersArray = [voters.democratVotes, voters.republicanVotes, voters.whiteVotes, voters.blackVotes ];
          console.log(votersArray)

          this.setState( {
              series: [{
                  name: '',
                  data: votersArray
              }]
          } );
          
      }

      fetchData()
        .catch(console.error);
  };

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height={250} />
      </div>
    );
  }
}


export default ElectionBar;