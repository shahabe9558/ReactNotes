import Child2 from './Child2';


function Child(props){

function parentTwo(newProps){
   console.log("I am inside Child object");
   console.log(newProps);
   props.onCall(newProps)
}
    return (
        <div>
          <Child2 onCallTwo = {parentTwo} />
        </div>
    )
}
export default Child;