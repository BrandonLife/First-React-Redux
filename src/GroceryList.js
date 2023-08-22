import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtoDo, removetoDo, clearTodos } from './features/todoSlice'

function Grocery(){

const grocerylist = useSelector((state) => state.todo.items)
console.log(grocerylist)
const dispatch = useDispatch()
const [input, setInput]= useState('')

const renderItems = grocerylist.map((grocery, index) => <li key={index} onClick={()=> dispatch(removetoDo(index))}>{grocery}</li>)
const groceryAdd = (e) => {
  e.preventDefault()
  dispatch(addtoDo(input))
}


return(
  <div>
    <form id='groceryForm' onSubmit={(e) => groceryAdd(e)}>
      <input type='text' onChange={(e) => setInput(e.target.value)}></input>
      <button type='submit'>Submit</button>
    </form>
   <ul>
    {renderItems}
   </ul>
   <button onClick={(e)=> dispatch(clearTodos())}>Clear</button>
  </div>
)


}

export default Grocery