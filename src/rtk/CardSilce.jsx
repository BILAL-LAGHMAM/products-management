import { createSlice } from '@reduxjs/toolkit'
export const CardSlice = createSlice({
    initialState: [],
    name: "CardSlice",
    reducers: {
        toCard: (state, action) => {
            const displayState = state.map(val => val)
            const getId = displayState.map(val => val.id)
            console.log(action.payload)
            if (!(getId.includes(action.payload.id) && action.payload)) {
                return [...state, action.payload]
            }
        },
        dellProd: (state, action) => {
            return state.filter(val => Number(val.id) !== Number(action.payload))
        }
    }
})
export const { toCard, dellProd } = CardSlice.actions
export default CardSlice.reducer