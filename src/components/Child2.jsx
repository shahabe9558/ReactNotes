const Child2 = (props) =>{

function clickHandler(){
    props.onCallTwo();
}
   return(
    <div>
        <p onClick={clickHandler}>CLick Here</p>
    </div>
   )
}
export default Child2;