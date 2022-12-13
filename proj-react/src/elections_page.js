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
import apis from "./api/index.js";

class ElectionsPage extends React.Component {
    constructor(props){
        super(props);
        // takes props tag (plan tag) and stateName (state name) and mmd (boolean true/false) and generates election data based on that
        this.state = {
          voteArrays: [[<></>]],
          dropDowns: [],
          selectedDistrict: -1,
          finishedUpdating: false,
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
    componentDidMount(){
      if(!this.props.mmd){
        apis.getSmdPlanByTag(this.props.tag, this.props.stateName).then(response=>{
          this.state.voteArrays[0] = [];
          let reps=response.data.representatives;
          console.log(reps);
          for(let i = 0; i < reps.length; i++){
            this.state.voteArrays[0].push(<VotesChart electStruct={reps[i]} district={i+1} key={"votechartd"+i} id={"votechartd"+i}/>)
            this.state.dropDowns.push(<Dropdown.Item key={"dropdowndist"+i} id={"dropdowndist"+i} onClick={() => this.selectDistrict(i)} href={"#/selected-district"}>District {i+1}</Dropdown.Item>
            )
          }
          console.log(this.state.voteArrays[0])
          console.log(this.state.dropDowns)
          this.setState({finishedUpdating: true});
        })
      }
      else{
        apis.getMmdPlanByTag(this.props.tag, this.props.stateName).then(response=>{
          this.state.voteArrays[0] = [];
          let reps=response.data.representatives;
          console.log(reps);
          for(let i = 0; i < reps.length; i++){
            this.state.voteArrays[0].push(<VotesChart electStruct={reps[i]} district={i+1} key={"votechartd"+i} id={"votechartd"+i}/>)
            this.state.dropDowns.push(<Dropdown.Item key={"dropdowndist"+i} id={"dropdowndist"+i} onClick={() => this.selectDistrict(i)} href={"#/selected-district"}>District {i+1}</Dropdown.Item>
            )
          }
          console.log(this.state.voteArrays[0])
          console.log(this.state.dropDowns)
          this.setState({finishedUpdating: true});
        })
      }
    }
    selectDistrict(district){
      this.setState({selectedDistrict: district});
      this.select= district;
      console.log(this.select);
    }
    select = -1;
    render(){
       console.log("ran again")
        return(
            <div style={{width:"100%"}}>
                <DropdownButton id="select-district-election" variant="secondary" title="Select District to View">
                    {this.state.dropDowns}
                </DropdownButton>
                {this.state.finishedUpdating ? <></> : "Loading..."}
                {this.select == -1 ? <></> : this.state.voteArrays[0][this.select]}
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
            height: 150,
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
          },
          title:{
            text: "District " + this.props.district,
          }
        },
      };
    }
    componentDidMount() {
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