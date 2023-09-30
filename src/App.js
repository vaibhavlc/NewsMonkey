import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"; 
import Spinner from './componets/Spinner'
export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter >
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress  }
        
      />
       
       <Routes>
       <Route exact path="/business"  element={ <News  setProgress={this.setProgress}   key ="business" pageSize={6} country="in" category="business"/>}/>
          <Route exact  path="/"  element={ <News  setProgress={this.setProgress} key = "general" pageSize={6} country="in" category="general"/>}/>
         
          <Route exact path="/entertainment"  element={ <News  setProgress={this.setProgress} key ="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route exact path="/health"  element={ <News  setProgress={this.setProgress} key ="health" pageSize={6} country="in" category="health"/>}/>
          <Route exact path="/science"  element={ <News  setProgress={this.setProgress} key = "science" pageSize={6} country="in" category="science"/>}/>
          <Route exact path="/sports"  element={ <News  setProgress={this.setProgress} key ="sports" pageSize={6} country="in" category="sports"/>}/>
          <Route exact path="/technology"  element={ <News  setProgress={this.setProgress} key ="technology" pageSize={6} country="in" category="technology"/>}/>
         
         
        
          </Routes>
         
       
         
          
         
       
        </BrowserRouter>
      </div>
    )
  }
}
