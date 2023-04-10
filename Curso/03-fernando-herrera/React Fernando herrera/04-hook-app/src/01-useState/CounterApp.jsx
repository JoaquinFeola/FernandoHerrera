import { useState } from "react"

export const CounterApp = () => {

  const [state, setCounter ] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 20,
  });
  const { counter1, counter2, counter3 } = state;

  return (
    <>
        <h1>Counter1: { counter1 }</h1>
        <h1>Counter2: { counter2 }</h1>
        <h1>Counter3: { counter3 }</h1>
        <hr />
        <button 
        className="btn btn-primary" 
        onClick={() => setCounter({
          ...state,
          counter1: counter1 + 1, 
        })}
        >
          +1
        </button>
    </>
  )
}
