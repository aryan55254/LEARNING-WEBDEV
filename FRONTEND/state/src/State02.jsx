import React, { useState } from 'react'

function State02() {
    const [person , setPerson] = useState({name : "john" , age : 100});
    const handlebutton = () => {
        const newperson = { ...person, age: person.age + 1 };
        setPerson(newperson);
    }
  return (
    <>
    <h1> {person.name} </h1>
    <h1>{person.age}</h1>
    <button onClick={handlebutton}> inc age</button>
    </>
  )
}

export default State02
//state updates are asynchronous , so whwnever u call usestate react will apply update in next component render 
//in react if u do add state value two times like set state = old state + 1 u do this two times then both them will be same because of async nature of react it runs them together it doesn't run first one first and second one afterwards to do 
//to do ther stuff use callback like prevstate it can do the job u want to do 
//controlled components 
//some native html elements maintain thier own state the input tag is an example it updates its state each key stroke we can control its state using use state as well and putting state as its props 
