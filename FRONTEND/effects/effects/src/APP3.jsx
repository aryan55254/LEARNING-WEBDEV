{/*
    useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
    */}
import { useEffect, useState } from "react";

export default function APP3() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}
//this will also not work as intended 
// setInterval is never stopped, so multiple intervals keep running in parallel. This causes the counter to increase every 2 seconds instead of every 1 second because multiple intervals are updating the state at the same time.
