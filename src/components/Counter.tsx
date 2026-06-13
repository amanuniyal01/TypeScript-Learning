
function Counter() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold">Counter App</h1>
            <div className="flex gap-5 mt-10">
                <button className="bg-gray-200 rounded-lg p-3">Increment</button>
                <button className="bg-gray-200 rounded-lg p-3">Decrement</button>
                <button className="bg-gray-200 rounded-lg p-3">Reset</button>
            </div>
        </div>
    )
}

export default Counter