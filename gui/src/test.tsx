import { useState } from "react";
import img from "./assets/image 13.png"

export function Test() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>COUNTER</h1>
      {counter}
      <img src={img}/>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </>
  )
}
