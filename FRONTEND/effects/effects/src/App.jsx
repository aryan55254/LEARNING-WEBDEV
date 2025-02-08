import React from 'react'
import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0);

  setInterval(() => {
    setCounter(count => count + 1)
  }, 1000);
  return (
    <p>{counter} seconds have passed.</p>
  )
}

export default App
//when components need to interacts with things outside themselver , these interactions are called side-effects 
//to use sideeffects we have useeffect hook
//in above code we make a timer but it will go bersek because use state is rendering it every second these cases we could use effect and when a lot of stuff is imported on page like fetching from api 
//we can wrap this around useefect hook and use count it outside the usestate

