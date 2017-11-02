import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, message: '' }
  }
  componentDidMount() {
    database.ref('/messages').on('value', (snapshot) => {
      const data = Object.values(snapshot.val());
      this.setState({ data });
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    database.ref('/messages').push(message);
    // Clean the input
    this.setState({
      message: ''
    })
  }
  handleChangeInput = (e) => {
    const message = e.target.value;
    this.setState({
      message
    });
  }
  render() {
    return (
      <div>
        <h2>Messages</h2>
        <ul className="display">
          {this.state.data ? this.state.data.map((msg, index) => <li key={`msg-${index}`}>{msg}</li>) : 'No messages'}
        </ul>
        <form className="input">
          <input type="text" value={this.state.message} onChange={this.handleChangeInput} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;