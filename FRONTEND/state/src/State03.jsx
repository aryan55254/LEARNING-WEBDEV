import React, { useState } from "react";

function State03() {
  const [person, setPerson] = useState({ name: "john", age: 100 });

  const handleButton = () => {
    setPerson(prevPerson => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <button onClick={handleButton}>Inc Age</button>
    </>
  );
}

export default State03;
