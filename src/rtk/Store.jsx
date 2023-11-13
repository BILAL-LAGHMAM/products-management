import { configureStore } from '@reduxjs/toolkit'
import CardSlice from './CardSilce'
export const store = configureStore({
  reducer: {
    Card: CardSlice
  },
})