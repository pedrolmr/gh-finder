import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import axios from 'axios';

import './App.css';

const gh_id = `${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
const gh_secret = `${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${gh_id}&client_secret=${gh_secret}`
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
