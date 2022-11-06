import React, { useState } from "react";
import StatesNavbar from './StatesNavbar.js';
import { renderMatches, useParams } from "react-router-dom";
import StatePage from "./StatePage.js";
import ElectionsPage from "./ElectionsPage.js";
import DemographicsPage from "./DemographicsPage.js";
import SourcesPage from "./Sources.js";

export default function StatePageShell(props){
    const params = useParams();
    const stateName = params.stateName;
    let path = true;
    let returns = (<></>)
    if(stateName.localeCompare("elec") === 0 || stateName.localeCompare("src") === 0 || stateName.localeCompare("demo") === 0)  {
        path = false;
    }
    else{

    }
    if(path){
        returns = (<StatePage stateName={stateName}/>)
    }
    else if(stateName.localeCompare("elec") === 0){
        returns = (<ElectionsPage/>) // TODO: place election page here
    }
    else if(stateName.localeCompare("src") === 0){
        returns = (<SourcesPage/>) // TODO: place source page here
    }
    else if(stateName.localeCompare("demo") === 0){
        returns = (<DemographicsPage/>) // TODO: place demographic page here
    }
    return(
        returns
    );
}