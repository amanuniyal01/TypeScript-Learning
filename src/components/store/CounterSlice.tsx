import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Counter = {
    counter: number;
}
const initialState: Counter = {
    counter: 0
}
const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1

        },
        decrement: (state) => {
            state.counter -= 1
        },
        addByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
        reset: (state) => {
            state.counter = 0
        }
    }

})
export const { increment, decrement, addByAmount, reset } = CounterSlice.actions
export default CounterSlice.reducer