
import React from 'react'
import './App.css'

const fruit=["Apple","Banana","Mango"];
const prices=[100,200,300];

function Helper({item,price}){
  return (
    <main>
    <img src="https://th.bing.com/th/id/OIP.BeDGgdwaUhy_ypvY5yeRVAHaFX?w=257&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" height={200}></img>
      <ul>
        {item.map((it,i)=>(
          <li key={i}>{it}-{price[i]}</li>
        ))}
      </ul>

    </main>
  )
}


function App() {
  return (<div>
  <h2>Welcome to our fruit shop</h2>
  <Helper item={fruit} price={prices}/>
   </div>
)
}


export default App;