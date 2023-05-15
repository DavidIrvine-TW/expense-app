import './NewExpenseForm.css'
import { useState } from 'react'

function NewExpenseForm(props) {

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
        console.log(expenseData)
    }

  return (
   <form className='new-expense__controls' onSubmit={submitHandler}>
    <div className='new-expense__control'>
        <label>Title</label>
        <input 
        type="text" 
        value={enteredTitle} 
        onChange={titleChangeHandler}/>
    </div>
    <div className='new-expense__control'>
        <label>Amount</label>
        <input 
        type="number"
        min="0.01" 
        step="0.01" 
        onChange={amountChangeHandler} 
        value={enteredAmount}/>
    </div>
    <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" 
        min="2020-01-01" 
        max="2023-01-01" 
        onChange={dateChangeHandler} 
        value={enteredDate}/>
    </div>
    <div className='new-expense__actions'>
        <button type="submit" >Add...</button>
    </div>
   </form>
  )
}

export default NewExpenseForm