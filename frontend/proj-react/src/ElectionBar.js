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
            <div className="bg-dark text-light text-center pt-2 pb-2 w-100">
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
                        </Col>
                        <ApexChart/>
                        <Col>
                        </Col>
                        <Col>
                        
                        </Col>
                        <Col>
                            <Representative name="Generic Name" flavor="White Democratic Representative" img="https://randomuser.me/api/portraits/men/10.jpg"/>
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
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
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
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
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
export default ElectionBar;