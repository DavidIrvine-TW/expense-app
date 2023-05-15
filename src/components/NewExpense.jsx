import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'


function NewExpense() {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        console.log(expenseData)
    }


  return (
    <div className='new-expense'>
        <NewExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
        
    </div>
  )
}

export default NewExpense