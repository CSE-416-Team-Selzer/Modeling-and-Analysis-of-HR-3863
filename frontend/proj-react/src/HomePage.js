import React from "react";
import StatesNavbar from './StatesNavbar.js';
import HomeMap from './HomeMap.js';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <StatesNavbar />
                <p>Welcome to the homepage. We're not really sure what this will look like in the end product, but on the navbar you'll see several options for the states.</p>
                <p>Click through those to get to the state pages.</p>
                <HomeMap />
            </div>
        )
    }
}