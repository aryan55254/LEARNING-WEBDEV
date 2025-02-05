import React from 'react'
import { useState } from 'react';
function State01() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  
  const handleIncreaseAge = () => {
    person.age = person.age + 1;
    setPerson(person);
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  )
}

export default State01
//the no. increases only at re renders
//we are mutating the current state object 
//react wants the states to be immutable so it doesn't notice if u change the original object but if u make a new object it will notice it
// Imagine you are updating a list. If you just change one element in the list directly, React might not notice. But if you create a new list with the updated element, React will recognize the change and re-render accordingly.