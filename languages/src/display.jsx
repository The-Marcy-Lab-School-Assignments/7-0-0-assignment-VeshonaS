import { useState } from "react"

export const Greet = ({size}) => {
  const [lang, setLang] = useState('Good Morning')

const Spanish = () =>{
  setLang('Buenos Dias')
}
const English = () =>{
  setLang('Good Morning')
}
const Chinese = () =>{
  setLang('早上好')
}
const Japanese = () =>{
  setLang('おはよう')
}
const Portuguese = () =>{
  setLang('Bom Dia')
}
  return (
    <div className="header">
       <h1 style={{'fontSize': `${size}px`}}>{lang}</h1>
  <button onClick={English}>English</button>
  <button onClick={Spanish}>Spanish</button>
  <button onClick={Chinese}>Chinese</button>
  <button onClick={Japanese}>Japanese</button>
  <button onClick={Portuguese}>Portuguese</button>
  </div>
 
  )
}
export const Size = ({size, setSize}) => {
 
  const upSize =()=>{
    setSize(size + 1)
  }
  const downSize = () =>{
    setSize(size - 1)
  }
  return (
    <div className="sizes">
      <button onClick={upSize}>+</button>
      <button onClick={downSize}>-</button>
    </div>
  )
}