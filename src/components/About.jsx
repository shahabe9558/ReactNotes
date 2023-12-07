import {useNavigate } from "react-router-dom";

const About = () =>{
    const heelloo = useNavigate();
    function clickHandler()
    {
        heelloo("/contact");
    }
    return(
        <div>
           <p>This is a About components</p>
           <br/>
           <br/>
           <button onClick={clickHandler}>
              Contact par jao
           </button>
        </div>
    )
}
export default About;