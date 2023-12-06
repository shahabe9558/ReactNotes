
import './App.css';
import { useEffect, useState } from 'react';
//learn the concept of formData and fetch all the formdata
// in this we will handle multiple input elemet to store the form data
function App() {
  const [formData, setFormData] = useState({firstName:"", lastName:"", textArea:"", isVisible:true, mode:""});
  console.log("form data is", formData);

  // to maintain this we use a special syntax 
  // first we copy old state and then set fucntion called and ui re-render 
  const changeHandler = (event)=> {
  const {value, type, checked, name} = event.target;
  setFormData((prevFormData) => {
   return{
    ...prevFormData,
    [name] : type === "checkbox" ? checked : value
   }
  });
  }
  return (
    <div className="">
      <form>
          {/* to handle multiple input we use name attribute and creat a state object */}
          {/* to keep state of single element we use value attribute  */}
          <input type='text' 
          placeholder='Enter Your first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
          />

          <input type='text' 
          placeholder='Enter Your last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
          />
          <textarea placeholder='Enter Your Text'
          onChange={changeHandler}
          name='textArea'
          value={formData.textArea}
          >
          </textarea>
          <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked= {formData.isVisible}
          />
          <label htmlFor='isVisible'>Am i visible</label>
          <br/>
          <br/>

          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          id='mode'
          value="Online Mode"
          checked= {formData.mode === "Online Mode"}
          />
          
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          id='mode'
          value="Off-Line"
          checked = {formData.mode === "Off-Line"}
          />
      </form>
    </div>
  );
}
export default App;
