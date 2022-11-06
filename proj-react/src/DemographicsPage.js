import React, { useState } from "react";
import StatesNavbar from './StatesNavbar.js';

class DemographicsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    render(){
        return(
            <div style={{width:"100%"}}>
                <StatesNavbar stateSelect={true}/>
            </div>
        )
    }
}

export default DemographicsPage