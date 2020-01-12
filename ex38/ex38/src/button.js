import React from "react"

class Button extends React.Component{
    
    render(){
    
    let login=this.props.isLogged?"LOG OUT":"LOG IN"
    return(
    <button onClick={()=>this.props.handleClick()}>{login}</button>)
    }
}

export default Button