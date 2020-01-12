import React from "react"

class Button extends React.Component{
    
    render(){
    
    let login="BUTTON"
    return(
    <button onChange={()=>{this.state.isLogged?login="LOG OUT":login="LOG IN"}}>{login}</button>)
    }
}

export default Button