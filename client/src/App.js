import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import styled from 'styled-components'
import axios from "axios"
import HomePage from './components/HomePage'
import Search from './components/Search'
import NavBar from './components/NavBar'
import Album from './components/Album'
import Product from './components/Product'

class App extends Component {

  state = {
    albums: [],
    loading: true
  }

  async componentDidMount() {
    var updatedHomeAlbums = []
    try {
      const res1 = await axios.get(`https://vgmdb.info/album/21096`)
      updatedHomeAlbums.push(res1.data)
      const res2 = await axios.get(`https://vgmdb.info/album/56366`)
      updatedHomeAlbums.push(res2.data)
      const res3 = await axios.get(`https://vgmdb.info/album/12537`)
      updatedHomeAlbums.push(res3.data)
      const res4 = await axios.get(`https://vgmdb.info/album/2491`)
      updatedHomeAlbums.push(res4.data)
      const res5 = await axios.get(`https://vgmdb.info/album/16054`)
      updatedHomeAlbums.push(res5.data)
      const res6 = await axios.get(`https://vgmdb.info/album/4593`)
      updatedHomeAlbums.push(res6.data)
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
      <NavBar />
        <Switch>
          <Route exact path="/" render={HomePageComponent}/>
          <Route exact path="/search/:searchItem" component={Search} />
          <Route exact path="/album/:albumId" component={Album} />
          <Route exact path="/product/:productId" component={Product} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
