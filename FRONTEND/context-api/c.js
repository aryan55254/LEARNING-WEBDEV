//why we need context api 
//suppose we have this 
//comp 1 => comp b => comp c => comp d
// i have state in compA want to use in comp d we can do that by prop drilling but shouldn't do it because if i have to render comp b somewhere else we have to change whole tree 
//in context api we set stat ein context it can be used by every comp
//no prop drilling
//if comp a changes state then comp d does it automatically itself as well
//if we need to give these comp access to context we have to wrap these comp inside context provider 
//key concepts
//context creation 
//reacte.createcontext()  = this object will hold the dfault value of the context 
//provider is component that allows you to provide data to components that consume the context 
//consumer are components that consume values from context
//usecontext hook allows to access context values 
//for simple context api 
//make a createcontext component 
//import it in provider component and add logic to it 
//import provider in main and wrap all in it around it 
//now use usecontext and use it any child component 