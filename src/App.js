
import './App.css';
import { useEffect, useState } from 'react';

// useEffet are sideEffects render when all component things run 
// side effects are for state handle and a function tosetthe state 
function App() {
 const[text, setText] = useState("");

//  1-type => render on every changes
//  useEffect(() => {
//   console.log("UI rendering ho chuka hai");
//  })

// 2-type => render only one times 
// [] dependencies list are defined in this and called denpendency
// useEffect(() => {
//   console.log("UI rendering done");
// }, []);

// 3-Type => render first and when dependency list changes 
// useEffect(() => {
//    console.log("UI rendering done");
// }, [text]);


// 4-type => first run the return statement and then simple  
useEffect(()=> {
 console.log("This is simple rendering");
 return () => {
  console.log("This is return rendering");
 }
});

 function changeHandler(e)
 {
  setText(e.target.value)
  console.log(text);
 }
  return (
    <div className="">
       <input type='text' placeholder='Enter Your text' onChange={changeHandler}/>
    </div>
  );
}
export default App;
