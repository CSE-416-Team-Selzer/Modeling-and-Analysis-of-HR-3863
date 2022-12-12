import React from "react";
import StatesNavbar from './states_navbar.js';
import Chart from 'react-apexcharts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Enums from "./enums_m.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Util from "./util.js";

class ElectionsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          repArrays: [],
          curElectStruct: {
            winners: [
              {
                party: "silly",
                votesReceived: 1234,
                wonBy: 1,
              }
            ],
            losers:[
              {
                party:"very silly",
                votesReceived: 1233,
                wonBy: -1,
              }
            ]
          }
        }
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
                <Dropdown id="select-district-election" variant="secondary" title="Select District to View">
                    [POPULATE WITH DISTRICTS]
                </Dropdown>
                <VotesChart electStruct={this.state.curElectStruct}/>
            </div>
        )
    }
}

// new idea: votes chart shows all the votes by representative per district

class VotesChart extends React.Component {
    constructor(props) {
      super(props);
      let catBuilder = [];
      let dataBuilder = [];
      //        wonByBuilder.push(this.props.electStruct.winners[i].wonBy)
      for(let i = 0; i < this.props.electStruct.winners.length; i++){
        catBuilder.push(Util.capitalizeFirst(this.props.electStruct.winners[i].party).substring(0,1) + ". Rep. " + Enums.abbrevs.win)
        dataBuilder.push(this.props.electStruct.winners[i].votesReceived)
      }
      for(let i = 0; i < this.props.electStruct.losers.length; i++){
        catBuilder.push(Util.capitalizeFirst(this.props.electStruct.losers[i].party).substring(0,1) + ". Rep. " + Enums.abbrevs.loss)
        dataBuilder.push(this.props.electStruct.losers[i].votesReceived)
      }
      this.state = {
        series: [{
          name: "votes",
          data: dataBuilder,
        }],
        options: {
          chart: {
            type: 'bar',
            width: "100%",
            height: 200,
            toolbar:{
                show: false,
            },
            zoom: {
                enabled: false,
            }
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
            categories: catBuilder,
          }
        },
      };
    }
    componentDidMount() { // just commenting this out for now
      /*const fetchData = async () => {
          
  
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
        this.setState({
            series:[{
                name:'votes',
                data: [4000, 2000, 1000, 500] // district votes
            }],
            options: {
                title: {
                    text: "District X Votes"
                },
                xaxis:{
                    categories: ["M. Amin (R. Other)", "J. Sheryl (D. Black)", "W. Hayes (R. White)", "R. Shmidt (D. Black)"] // representative names
                }
            }
        })*/
    };
    render() {
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={this.state.options.chart.height} />
        </div>
      );
    }
  }

  // these are the votes for one candidate broken down
  class VotesChartDetailed extends React.Component {
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

export default ElectionsPage