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
                        <Col>
                        <h2>{this.props.s}MD Election of {this.props.rep.name}</h2>
                        <br/>
                        <Button variant="dark" onClick={()=>this.props.cBack()}>Back</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Representative name={this.props.rep.name} flavor={this.props.rep.flavor} img={this.props.rep.img}/>
                        </Col>
                        <Col xs={10}>
                            <ApexBarChartDetailed/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <Representative name="Shmidt Harlowe" flavor="White Democratic Representative" img="https://randomuser.me/api/portraits/men/15.jpg"/>
                        </Col>
                        <Col xs={10}>
                            <ApexBarChartDetailedLess/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


class ApexBarChartDetailed extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        series: [{
          data: [200, 430, 448, 100, 220, 350, 23]
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
            categories: ['Democrat', 'Republican', 'White', 'Black', "Hispanic", "Religious", "Areligious"
            ],
          }
        },
      };
    }
    render() {
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={250}/>
        </div>
      );
    }
  }
  class ApexBarChartDetailedLess extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        series: [{
          data: [100, 230, 348, 50, 120, 250, 13]
        }],
        options: {
          chart: {
            type: 'bar',
            width: "100%",
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
            categories: ['Democrat', 'Republican', 'White', 'Black', "Hispanic", "Religious", "Areligious"
            ],
          }
        },
      };
    }
    render() {
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={250} />
        </div>
      );
    }
  }
export default SpecificElection;