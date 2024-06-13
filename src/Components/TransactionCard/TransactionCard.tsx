import React from 'react';

interface Props {
  id: number;
  name: string;
  amount: number;
  removeTransaction: (id: number) => void;
}

const TransactionCard: React.FC<Props> = ({id, name, amount, removeTransaction}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <span>{name}</span>
          <div className="d-flex gap-3 align-items-center">
            <strong>{amount}</strong>
            <button className="btn btn-danger" onClick={() => removeTransaction(id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;