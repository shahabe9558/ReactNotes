import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Child2 from './components/Child2';
import { useState } from 'react';

function App() {
let obj = {
  title:"Title1",
  city:"New"
}
function parentTest(obj){
  console.log("I am inside app.js");
  console.log(obj);
}
  return (
    <div className="text-3xl font-bold underline bg-red-200">
        <Child onCall = {parentTest}/>
    </div>
  );
}
export default App;
