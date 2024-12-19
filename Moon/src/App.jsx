import { useState } from 'react'
import './App.css'

function App(){
    
  let [bgcolor, SetColor] =useState("Pink")
  function Click(color){
SetColor("red")
  }
  function click2()
  {
    SetColor("lavender")
  }
return(
<>
<div style={{display:"flex",justifyContent:"center", width:"100%", height:"10vh",backgroundColor:bgcolor}}>

</div>
<button onClick={Click}>Red</button>
<button onClick={click2}>Lavender</button>


</>
)
}
export default App