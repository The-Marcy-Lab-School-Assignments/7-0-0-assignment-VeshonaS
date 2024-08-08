import { Greet } from "./display"
import { useState } from "react"

import { Size } from "./display"
function App() {
  const [size, setSize] = useState(16)

  return(
    <>
    <Size size = {size} setSize = {setSize}></Size>
    <Greet size = {size}></Greet>
    
    </>
  )
   
}

export default App
