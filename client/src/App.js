import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import styled from 'styled-components'
import axios from "axios"
import HomePage from './components/HomePage'

class App extends Component {

  state = {
    albums: [],
    loading: true
  }

  async componentDidMount() {
    var updatedHomeAlbums = []
    try {
      for(var i = 0; i < 6;  i++) {
      var min = Math.ceil(3);
      var max = Math.max(72799)
      var randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
      const res = await axios.get(`https://vgmdb.info/album/${randomResult}`)
      updatedHomeAlbums.push(res.data)
      }
      this.setState({albums: updatedHomeAlbums, loading: false})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const HomePageComponent = () => (<HomePage albums={this.state.albums} loading={this.state.loading}/>)
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" render={HomePageComponent}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
