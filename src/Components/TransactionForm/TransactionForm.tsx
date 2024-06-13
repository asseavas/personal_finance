import React, {useState} from 'react';
import {Transaction} from '../../type';

interface Props {
  onSubmit: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<Props> = ({onSubmit}) => {
  const [transactionData, setTransactionData] = useState({
    name: '',
    amount: '',
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTransactionData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random(),
      name: transactionData.name,
      amount: parseFloat(transactionData.amount),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Item name"
            value={transactionData.name}
            onChange={onFieldChange}
          />
        </div>
        <div className="col-auto">
          <div className="input-group ">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              name="amount"
              value={transactionData.amount}
              onChange={onFieldChange}
            />
            <span className="input-group-text">KGS</span>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;