import React from "react"

class TodoItem extends React.Component{
    constructor(){
        super()
        this.state = {
        count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
        return {
        count: prevState.count + 1
        }
        })
        }
        
    render(){
     
            
            
        return (
            <div className="todo-item">
            <input type="checkbox" checked={(this.state.count%2)?true:false} onChange={this.handleClick}/>
            <p>{this.props.item.text}</p>
            
            </div>
            )
    }
}





/* function TodoItem(props) {
return (
<div className="todo-item">
<input type="checkbox" checked={props.item.completed} onChange={()=>{console.log("Нажал")}}/>
<p>{props.item.text}</p>

</div>
)
} */
export default TodoItem