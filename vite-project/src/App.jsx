import { useState } from 'react'
function App(){

  let[num ,setNum] = useState(0)

  function increase(){
    console.log('Added')
    setNum(num + 1)
    console.log(num)
  }

  function decrease(){
    if(num == 0){
      console.log('invalid')
    }
    else{
      setNum(num - 1)
    }

    console.log(num)
  }
  return(
    <>
    <h1>Hello Counter {num} </h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
}


export default App
