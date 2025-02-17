import { useEffect, useState } from "react";

export default function APP2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  })

  return (
    <p>{counter} seconds have passed.</p>
  );
}
//We can wrap this calculation inside a useEffect hook to move it outside the rendering calculation. It accepts a callback function with all the calculations.
//BUT IT STILL GOES TOO FAST WE USE THE DEPENDENCY ARRAY 
// by default useeffect runs on every render 
//the dependancy array allows hook to re render only when these dependencies are chamnged 
//if you have a state variable and want to have some side-effect occur any time the state changes, you can use this hook and mention the state variable in the dependency array.
//now in this we don't want it to run any time other than the initial time it renders so we will pass it empty