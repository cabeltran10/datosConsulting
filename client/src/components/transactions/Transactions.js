import React, { Component } from "react";
import TransactionItem from "./TransactionItem";

import PorpTypes from "prop-types";

class Transactions extends Component {
  render() {
    return this.props.transactions.map(transaction => (
      <TransactionItem
        key={transaction._id}
        transaction={transaction}
        chooseData={this.props.chooseData}
      />
    ));
  }
}

// PorpTypes
Transactions.PorpTypes = {
  transactions: PorpTypes.array.isRequired
};

export default Transactions;
