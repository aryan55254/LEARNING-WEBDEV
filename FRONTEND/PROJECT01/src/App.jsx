import React from 'react'

function App() {
  return (
    <>
    <div><PostComponent user = "lol" followers="99" /></div>
    <div><PostComponent /></div>
    </>
    
  ) 
}
const style = {
  width:500 , backgroundColor: "white" , borderRadius :10 , borderColor : "gray",
  borderWidth:1
}
function PostComponent({user = "aryan" , followers = "55"}){
  return <div style =  {style} >
<img src="https://www.dubaitraveltourism.com/assets/images/tours/gallery/gallery-01699700440-img-worlds-of-adventrue.jpg" 
style={{
  width:20,
  height:20,
  borderRadius:20
}} />
<p>{user},{followers}</p>
  </div>
}
export default App