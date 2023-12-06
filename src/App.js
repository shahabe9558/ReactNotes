
import './App.css';
import { useEffect, useState } from 'react';
//learn the concept of formData and fetch all the formdata
// in this we will handle multiple input elemet to store the form data
function App() {
  const [formData, setFormData] = useState({firstName:"", lastName:""});
  console.log("form data is", formData);

  // to maintain this we use a special syntax 
  // first we copy old state and then set fucntion called and ui re-render 
  const changeHandler = (event)=> {
  //  setFormData(event.target.value); 
  setFormData((prevFormData) => {
   return{
    ...prevFormData,
    [event.target.name] : event.target.value
   }
  });
  }
  return (
    <div className="App flex flex-col justify-center">
      <form>
          {/* to handle multiple input we use name attribute and creat a state object */}
          <input type='text' 
          placeholder='Enter Your first name'
          onChange={changeHandler}
          name='firstName'
          />

          <input type='text' 
          placeholder='Enter Your last name'
          onChange={changeHandler}
          name='lastName'
          />
          <textarea placeholder='Enter Your Text' >

          </textarea>
      </form>
    </div>
  );
}
export default App;
