import React, { Component }  from 'react';
import List from './components/List.jsx'
import Form from './components/Form.jsx'
import './App.css';

class App extends Component{
  constructor(){
  super();
    this.state = {
      tasks: []
    };
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      const savedTasks = JSON.parse(tasks);
      this.setState({ tasks: savedTasks})
    } 
  }

  addTask = async (task) => {
    await this.setState({ tasks: [...this.state.tasks, {
      id: (Math.floor(Math.random() * 100) + 1),
      text: task,
      completed: false
    }] });
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  updateTask = async (task) => {
    const newTasks = this.state.tasks.map(x => {
      if(task === x)
      return {
        id: task.id,
        text: task.text,
        completed: !task.completed
      } 
      else 
        return x
    });
    await this.setState({ tasks: newTasks})
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }


  deleteTask = async (id) => {
    const newTasks = this.state.tasks.filter(x => x.id !== id);
    await this.setState({
      tasks: newTasks
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  render () {
  return (
    <div className="wrapper-container">
      <h1 className="header-title">Tiny Task V2.0</h1>
      <Form 
        addTask={this.addTask} />
      <List
        updateTask={this.updateTask.bind(this)}
        tasks={this.state.tasks}
        deleteTask={this.deleteTask.bind(this)} />
    </div>
    );
  }
}
export default App;
