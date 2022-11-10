import React, { useState } from "react";
import StatesNavbar from './states_navbar.js';
import { renderMatches, useParams } from "react-router-dom";
import StatePage from "./state_page.js";
import ElectionsPage from "./elections_page.js";
import DemographicsPage from "./demographics_page.js";
import SourcesPage from "./sources.js";

export default function StatePageShell(props){
    const params = useParams();
    const stateName = params.stateName;
    let path = true;
    let returns = (<></>)
    if(stateName.localeCompare("elec") === 0 || stateName.localeCompare("src") === 0 || stateName.localeCompare("demo") === 0)  {
        path = false;
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