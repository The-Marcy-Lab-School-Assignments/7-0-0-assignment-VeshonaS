import { useState } from "react"

export const Greet = () => {
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
       <h1>{lang}</h1>
  <button onClick={English}>English</button>
  <button onClick={Spanish}>Spanish</button>
  <button onClick={Chinese}>Chinese</button>
  <button onClick={Japanese}>Japanese</button>
  <button onClick={Portuguese}>Portuguese</button>
  </div>
 
  )
}
export const Size = () => {
  return (
    <div className="sizes">
      <button>+</button>
      <button>-</button>
    </div>
  )
}