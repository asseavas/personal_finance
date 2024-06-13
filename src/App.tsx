import TransactionForm from './Components/TransactionForm/TransactionForm';
import {useState} from 'react';
import {Transaction} from './type';
import TransactionCard from './Components/TransactionCard/TransactionCard';
import Navbar from './Components/Navbar/Navbar';

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
      <Navbar/>
      <div className="container pt-5 mb-3">
        <TransactionForm onSubmit={addTransaction}/>
      </div>
      <div className="container pt-5 d-flex flex-column gap-2">
        {transaction.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            id={transaction.id}
            name={transaction.name}
            amount={transaction.amount}
            removeTransaction={removeTransaction}
          />
        ))}
      </div>
      <div className="container pt-5">
        <strong>Total: {total} KGS</strong>
      </div>
    </>
  );
};

export default App;
