import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'


function NewExpense(props) {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        props.onAddExpense(expenseData) 
        console.log(expenseData)
    }


  return (
    <div className='new-expense'>
        <NewExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
        
    </div>
  )
}

export default NewExpense