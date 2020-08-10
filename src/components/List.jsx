import React, { Component } from 'react';
import Item from './Item.jsx';
import uuid from 'react-uuid'

class List extends Component {
  updateTask = (task) => {
    this.props.updateTask(task);
  }
 
  render() {
    const { tasks, deleteTask, toggleTaskDone } = this.props;
    const incompleteList = tasks.filter(x => x.completed === false);
    const completeList = tasks.filter(x => x.completed === true);
    return (
      <div className="list-container">
        <ul className="unfinished-task-container">
          <h2>To do: </h2>
          <hr />
          {
            incompleteList.map((x, index) => {
              return (
                <Item
                  toggleTaskDone={toggleTaskDone}
                  updateTask={this.updateTask}
                  deleteTask={deleteTask}
                  id={x.id}
                  key={uuid()}
                  index={index}
                  task={x}
                />
              );
              })
    }
        </ul>
        <ul className="finished-task-container">
          <h2>Done: </h2>
          <hr />
          {
            completeList.map((y, index) => {
              return (
                <Item
                  updateTask={this.updateTask}
                  deleteTask={deleteTask}
                  id={y.id}
                  key={uuid()}
                  index={index}
                  task={y}
                />
              );
            })
    }
        </ul>
      </div>
    );
  }
}

export default List;
