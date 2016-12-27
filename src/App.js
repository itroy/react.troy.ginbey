import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
  //Link, IndexRoute, browserHistory } from 'react-router'
import NavBar from './components/NavBar'
import ContentBoxWidthHalf from './components/ContentBoxWidthHalf'

const Home = () => (
  <div className="items">
    <ContentBoxWidthHalf colour="green"/>
    <ContentBoxWidthHalf colour="purple"/>
    <ContentBoxWidthHalf colour="blue"/>
  </div>
)
const About = () => <h2>About</h2>
const Work = () => <h2>Work</h2>
const CoreSkills = () => <h2>Core Skills</h2>
const DownloadCV = () => <h2>Download CV</h2>
const Contact = () => <h2>Contact</h2>

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar/>
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/skills' component={CoreSkills} />
          <Route path='/cv' component={DownloadCV} />
          <Route path='/contact' component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
