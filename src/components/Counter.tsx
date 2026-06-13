import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "./store/store"
import type { RootState } from "./store/store"
import { addByAmount, decrement, increment, reset } from "./store/CounterSlice"
import { useState } from "react"

function Counter() {
    const dispatch = useDispatch<AppDispatch>()
    const counter = useSelector((state: RootState) => state.counter.counter)
    const [input, setInput] = useState<number | null>(null)
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold">Counter App</h1>
            <h1>{counter}</h1>
            <div className="flex gap-5 mt-10">
                <button
                    onClick={() => {
                        dispatch(increment())

                    }} className="bg-gray-200 rounded-lg p-3">Increment</button>
                <button
                    onClick={() => {
                        dispatch(decrement())
                    }} className="bg-gray-200 rounded-lg p-3">Decrement</button>
                <button
                    onClick={() => {
                        dispatch(reset())
                    }} className="bg-gray-200 rounded-lg p-3">Reset</button>


                <input className="bg-amber-200"
                    type="number"
                    value={input ?? ""}
                    onChange={(e) => setInput(Number(e.target.value))}
                />
                <button
                    onClick={() => {
                        if (input !== null) {
                            dispatch(addByAmount(input))
                            setInput(null)
                        }
                    }}
                    className="bg-gray-200 rounded-lg p-3"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Counter