import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NewsMonkey</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 l" >
        <li class="nav-item ">
          <Link class="nav-link active" aria-current="page" to="/">Main</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="/business">Business</Link>
        </li>
    
        <li class="nav-item">
          <Link  class="nav-link" to="/entertainment">Entertainment</Link>
        </li>
    
      
        <li class="nav-item">
          <Link  class="nav-link" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="/technology">Technology</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link" to="/science">Science</Link>
        </li>
    
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
