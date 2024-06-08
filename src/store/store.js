import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../reducers/todolist/todoSlice'
export const store = configureStore({
  reducer: {
    todoSlice:todoSlice
  },
})