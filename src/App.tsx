import TransactionForm from './Components/TransactionForm/TransactionForm';
import {useState} from 'react';
import {Transaction} from './type';

const App = () => {
  const [transaction, setTransaction] = useState<Transaction[]>([
    {id: 1, name: 'Milk', amount: 70},
    {id: 2, name: 'Bread', amount: 35},
    {id: 3, name: 'Eggs', amount: 105},
  ]);

  const addTransaction = (transaction: Transaction) => {
    setTransaction((prevState) => {
      return [...prevState, transaction];
    });
  };

  const removeTransaction = (id: number) => {
    setTransaction((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
  };

  const total = transaction.reduce((acc, t) => {
    return acc + t.amount;
  }, 0);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
      <div className="container pt-5 mb-3">
        <TransactionForm onSubmit={addTransaction}/>
      </div>
      <div className="container pt-5 d-flex flex-column gap-2">
        {transaction.map((transaction) => (
          <div className="card" key={transaction.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <span>{transaction.name}</span>
                <div className="d-flex gap-3 align-items-center">
                  <strong>{transaction.amount}</strong>
                  <button className="btn btn-danger" onClick={() => removeTransaction(transaction.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container pt-5">
        <strong>Total: {total} KGS</strong>
      </div>
    </>
  );
};

export default App;
