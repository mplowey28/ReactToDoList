import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  updateInput(e) {
    this.setState({ task: e.target.value });
  }

  submitTask(e) {
    e.preventDefault();
    this.props.addTask(this.state.task);
    document.getElementById('addTaskInput').value = '';
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={e => this.submitTask(e)}>
          <input type="text" id="addTaskInput" onChange={e => this.updateInput(e)} required />
          <button className="add-button" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
