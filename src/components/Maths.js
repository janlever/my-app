import React, { useState } from "react"

//setCount(count + 1) on probleemne sest count on see mis ma arvan et on.
// targem on kasutada previous count ja new count,
// et lisab previous countile nt +2 ja sellest saab new count

const Maths = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 10)}>+10</button>
      <button onClick={() => setCount(count + 100)}>+100</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count - 10)}>-10</button>
      <button onClick={() => setCount(count - 100)}>-100</button>
    </>
  )
}

export default Maths
