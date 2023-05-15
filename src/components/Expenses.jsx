import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from './Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card 
    className="expenses-container">

      <ExpenseFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />

      {props.items.map(expense => 
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>)}  

    </Card>
  )
}

export default Expenses