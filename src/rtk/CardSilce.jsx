import { createSlice } from '@reduxjs/toolkit'
export const CardSlice = createSlice({
    initialState: [],
    name: "CardSlice",
    reducers: {
        toCard: (state, action) => {
            // return [...state, !(action.payload.incldes(action.payload.id)) && action.payload]
            const displatState = state.map(val => val)
            const getId = displatState.map(val => val.id)
            console.log(getId.includes(action.payload.id))
            if (!(getId.includes(action.payload.id) && action.payload)) {
                return [...state, action.payload]
            }
        },
    }
})
export const { toCard } = CardSlice.actions
export default CardSlice.reducer