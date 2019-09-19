import React, { Component } from 'react';


import PorpTypes from "prop-types";

export class TransactionItem extends Component {

    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted"
        }
    }

    // Methods

    render() {
        const { url } = this.props.transaction;
        return (
            <div className="row" style={this.getStyle()}>
            <div className="col-10">
            {url}
            </div>
            <div className="col-2">
            <botton
            className="btn"
            onClick={this.props.chooseData.bind(this, url)}
            >
            Submit
            </botton>
            </div>
            </div>
            );
    }
}

// PorpTypes
TransactionItem.PorpTypes = {
    transaction: PorpTypes.object.isRequired
}

export default TransactionItem;
