
import React from 'react'
import './App.css'

function PersonCard(props){
  return (
    <div>
    <p>Person's Name: {props.name}</p>
    <p>Person's Age: {props.age}</p>
    </div>
  )
}
function PersonCard2({name,age}){
  return (
    <div>
    <p>Person's Name: {name}</p>
    <p>Person's Age: {age}</p>
    </div>
  )
}
function App() {
  return (<div>
    {React.createElement("h1",null,"This is manually created react element without js")}
    <h3>Using Component Properties</h3>
    <PersonCard name="Aditi" age={23}/>
    <h3>Destructuring Component Properties</h3>
    <PersonCard2 name="Balu" age={22}/>
    </div>
)
}


export default App;