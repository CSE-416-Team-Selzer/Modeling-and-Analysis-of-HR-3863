import React, { useState } from "react";
import StatesNavbar from './StatesNavbar.js';
import { renderMatches, useParams } from "react-router-dom";
import StatePage from "./StatePage.js";

export default function StatePageShell(){
    const params = useParams();
    const stateName = params.stateName;
    return(
        <StatePage stateName={stateName}/>
    );
}