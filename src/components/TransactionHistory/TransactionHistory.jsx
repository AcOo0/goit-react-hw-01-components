import styles from './transactionHistory.module.css'

const TransactionHistory = ({ items = [] }) => { 
    const bodyItem = items.map(({id, type, amount, currency}) => (<tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))
    return (
        <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
        {bodyItem}
  </tbody>
</table>
    );
};

export default TransactionHistory;