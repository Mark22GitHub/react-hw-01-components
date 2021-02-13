import React from "react";
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';


const TransactionHistory = ({items}) => {
    return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      { items.map(item => (
    <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency}/>
      ))}
  </tbody>
</table>
    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ).isRequired,
}

export default TransactionHistory;