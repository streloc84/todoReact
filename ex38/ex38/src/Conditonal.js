import React from "react"

function Conditional(props){
    let cond=props.isLogged?"Logged in":"Logged out";
    
return(<div>{cond}</div>)
}

export default Conditional