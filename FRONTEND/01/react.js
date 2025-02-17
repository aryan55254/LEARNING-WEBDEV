//jsx is syntax extension  for js , lets u write html like stuff inside js file it actually calls a js create element function it always returns a single root element that is why we use react fragments <>
//className instead of class
//keys are used as identifier it assigns a unique id to stuff if it goes to backend/database 
//keys shouldn't be random 
//props are used to transfer data in react 
//state is a components memory 
//we want components to undergo visual changes as a result of user interactions  for this component needs to remember things about itself 
// the usestate is hook that allows to define state in a a functional component takes initial value as as a aparameter and returns  array with 2 eleemts in it in which one is current valyue of state and a function to update the state value 
//how state works in react 
// when a components state or props change it is destroyed and recreated from scratch  , this process is called rendering , the process of rendering generated a new virtual dom , the virtual dom is the lightweight representation of an actrual dom that react uses to keep track of the current state of ui , reacat then compares the new virtual dom to the previous one and calculates the minimum amount of changes needed to update the actual dom this is called the recoincilation 
//hooks 
// hooks are functions that let you use react features  all of them use "use" as prefix they can be called from top level of a functional component , cant be called inside loops or conditions
//we should  treat state as if it was immutable 
