import React, { Component }  from 'react';
import './Item.css';

class Item extends Component{

toggleDone = () => {
    this.props.updateTask(this.props.task);
}

render () {
  const { task, id, deleteTask} = this.props;
    return (
        <li className={"task" + (task.completed ? ' completed' : '')} >
            <h2>{task.text}</h2>
            <button type="button" className="done-button" onClick={this.toggleDone}>Done</button>
            <button type="button" className="remove-button" onClick={() => deleteTask(id)}>&#10008;</button>
        </li>
  );
}  
}

export default Item;