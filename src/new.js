import React from "react";
import { ReactDOM } from "react";

class car extends React.Component {

    clicktheButton = () => {
        window.alert('hi');
    }
    render(){
        return (<div className="car">
            <button onClick={this.clicktheButton}> ENTER </button>
        </div>)
    }
};

export default car;