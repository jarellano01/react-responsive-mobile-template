import React, {Component} from 'react';
import './mainContainer.css';


export default class Body extends Component {
    render() {
        return (
            <div className="main-container">

                {this.props.children}

            </div>
        )
    }
}