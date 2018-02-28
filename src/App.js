import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import liicon from './assets/linkedin.png';
import giticon from './assets/git.png';

class App extends Component {
  constructor(){
    super();
    this.state={
      showSki: false, 
      showAb: true,
      showProj: false,
      showCon: false
    }
  }
  
  showC(){
    this.setState({
      showCon: true,
      showAb: false,
      showProj:false,
      showSki: false
    })
  }
  
  showA(){
    this.setState({
      showCon: false,
      showAb: true,
      showProj:false,
      showSki: false
    })
  }
  
  showP(){
    this.setState({
      showCon: false,
      showAb: false,
      showProj:true,
      showSki: false
    })
  }
  
    showS (){
      this.setState({
        showCon: false,
        showAb: false,
        showProj:false,
        showSki: true
      })
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SUKANYA VIJAYAKUMAR</h1>
          <p>the science and art of web development<span id="blink-blink"> _</span></p>
          <div className="icons">
            <a href="https://github.com/SukanyaVee" target="_blank"><img src={giticon} alt="github"/></a>
            <a href="https://www.linkedin.com/in/sukanyavijayakumar"  target="_blank"><img src={liicon} alt="linkedin"/></a>
          </div>
        </header>
          <nav>
            <div className="section-name"  id={`section-${this.state.showAb}`} onClick={e=>{this.showA()}}>ABOUT</div>
            <div className="section-name" id={`section-${this.state.showSki}`} onClick={e=>{this.showS()}}>SKILLS</div>
            <div className="section-name"  id={`section-${this.state.showProj}`} onClick={e=>{this.showP()}}>PROJECTS</div>
            <div className="section-name"  id={`section-${this.state.showCon}`} onClick={e=>{this.showC()}}>CONTACT</div>
          </nav>
        <main>
          {this.state.showAb && <div className="section-content"><About/></div>}
          {this.state.showSki && <div className="section-content"><Skills/></div>}
          {this.state.showProj && <div className="section-content"><Projects/></div>}
          {this.state.showCon && <div className="section-content"><Contact/></div>}
      </main>
      </div>
    );
  }
}

export default App;
