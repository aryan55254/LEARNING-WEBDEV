 //conditional rendering using && operator  
 function App() {
   const animals = [
     "lion", "giraffe", "tiger", "elephant", "zebra", "panda", "cheetah", "kangaroo", "hippopotamus", "rhinoceros",
     "crocodile", "leopard", "wolf", "bear", "deer", "monkey", "gorilla", "fox", "rabbit", "squirrel",
     "koala", "otter", "moose", "buffalo", "camel", "dolphin", "whale", "octopus", "shark", "eagle",
     "parrot", "owl", "peacock", "penguin", "flamingo", "hedgehog", "badger", "raccoon", "hyena", "armadillo",
     "chameleon", "platypus", "turkey", "vulture", "alpaca", "sloth", "meerkat", "stingray", "jaguar", "bison"
   ];
   return (
     <ul>
       {animals.map((animal) => {return animal.startsWith("b") && <li key = {animal}>{animal}</li>})}
     </ul>
   )
 }
 export default App


