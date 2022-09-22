import React from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Chart from 'react-apexcharts';

class ElectionBar extends React.Component {
    render(){
        return (
            <div className="text-center pt-2 pb-2 w-100">
                <Container fluid>
                    <Row>
                        <Col>
                            <h2 className="lead">SMD Election</h2>
                        </Col>
                        <Col>
                            <h2 className="lead">MMD Simulated Election</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Representative name="Generic Name" flavor="Middle Eastern Republican Representative" img = "https://randomuser.me/api/portraits/men/23.jpg"/> 
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
                            <Representative name="Generic Name" flavor="White Democratic Representative" img="https://randomuser.me/api/portraits/men/10.jpg"/>
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Representative name="Generic Name" flavor="White Democratic Representative" img = "https://randomuser.me/api/portraits/men/32.jpg"/> 
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
                            <Representative name="Generic Name" flavor="Hispanic Democratic Representative" img="https://randomuser.me/api/portraits/men/12.jpg"/>
                            <br/>
                            <Button variant="dark" size="sm">Show More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

class Representative extends React.Component{
    construtor(props){
        this.state={
        }
    }
    componentDidMount(){
        this.setState({randPort: 10})
    }
    render(){
        return (
            <div>
                <div class="card-body text-center">
                    <img src={this.props.img} alt="" className="rounded-circle mb-3 img-fluid"/>
                    <h3 class="card-title">{this.props.name}</h3>
                    <p class="card-text">{this.props.flavor}</p>
                </div>
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
        data: [300, 130, 248, 150]
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