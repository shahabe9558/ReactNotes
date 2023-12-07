import { useNavigate } from "react-router-dom";

const Contact = () =>{
  const navigate = useNavigate();
    return(
        <div>
          <p>
            This is a Contact componenets
          </p>
          <button onClick={() => {navigate('/')}}>Move to Home</button>
        </div>
    )
}
export default Contact;