import React from 'react';
import Goals from "../components/Goals"
import Prompt from "../components/Prompt"
const home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>
            <Goals/>
            <Prompt/>
        </div>
    );
}

export default home;
