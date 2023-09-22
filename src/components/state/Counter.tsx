import { useReducer } from "react"

// Types
type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}

// Constants
const initialState: CounterState = { count: 0}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increase':
            return { count: state.count + action.payload }
        case 'decrease':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

// Main React Component of this file
function Counter () {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleIncreaseClick() {
        dispatch({ type: 'increase', payload: 10})
    }

    function handleDecreaseClick() {
        dispatch({ type: 'decrease', payload: 10})
    }

    return (
        <>
            <div>Count: {state.count}</div>
            <br />
            <div>
                <button onClick={handleDecreaseClick}>- Decrease 10</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleIncreaseClick}>+ Increase 10</button>
            </div>
        </>
    )
}

export default Counter