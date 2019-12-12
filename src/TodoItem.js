import React from 'react'
import './MyStyle.css'

function TodoItem(props) {
    const CompletedStyle ={
        fontFamily:"italic",
        color:"cdcdcd",
        textDecoration:"line-through"
    }
    return ( 
        <div className="todo-item">
             <input type="checkbox" checked={props.item.completed}
             onChange={() => props.handleChange(props.item.id)}
             />
            <p style={props.item.completed ? CompletedStyle: null}>{props.item.text}</p>
            <hr/>
        </div>
    )
    }
        
    
    export default TodoItem