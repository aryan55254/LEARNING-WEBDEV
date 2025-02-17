//useeffect is a mechanism that allows u to sync your component to external systems like server api browser dom 
//where do we actually need it 
//you don't need useeffect to calculate something based on state during rendering For a change in a component, due to a change in the props, you can calculate and set it during rendering.
//you don't need effects for events code that runs wehn a component is displayed should in effects rest in events 
//You do not need an effect to reset the state based on a condition most of the time.
//liting state up
//If a child component is using useEffect just to update state in a parent or sync state with another sibling, it's better to lift the state up to the nearest common parent and pass it down via props instead.
//When to Lift State Up Instead of Using useEffect?
//If multiple child components need access to the same state, store it in the parent and pass it via props.
//If a child is updating a parent’s state using useEffect, replace that with a direct callback function (prop) to update state.
//what not to do 
function ChildA({ count }) {
    return <p>Count: {count}</p>;
  }
  
  function ChildB({ setCount }) {
    useEffect(() => {
      setCount(10);  // ❌ Avoid using useEffect just to update parent's state
    }, []);
  
    return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
  }
  
  function Parent() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <ChildA count={count} />
        <ChildB setCount={setCount} />
      </>
    );
  }
  
//what to do
function Parent() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <ChildA count={count} />
        <ChildB setCount={setCount} />
      </>
    );
  }
  
  function ChildA({ count }) {
    return <p>Count: {count}</p>;
  }
  
  function ChildB({ setCount }) {
    return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
  }