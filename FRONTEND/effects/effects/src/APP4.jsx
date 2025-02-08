//uncesseary behaviour casued due to the set inverval not stopped can be prevented by clearing the interval  when the component is unmounted 
//cleanup function
import { useEffect, useState } from "react";

export default function APP4() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}

//useEffect(
//  () => {
//    // execute side effect
//    return () => {
//      // cleanup function on unmounting or re-running effect
//    };
//  },
//  // optional dependency array
//  [/* 0 or more entries */]
//)




