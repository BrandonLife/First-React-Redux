import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addtoDo: (state, action) => {
      console.log(action.payload)
      
      return {items: [...state.items, action.payload]}
    },
    clearTodos: () => {
      return {items: []}
    },
    removetoDo: (state, action) => {
      console.log(action)
      let array = [...state.items]
      let index = action.payload
      if(index !== -1) {
          array.splice(index, 1)
          return { items: array }
      }
  }
  }
})

export const {addtoDo, clearTodos, removetoDo} = todoSlice.actions

export default todoSlice.reducer