import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state={
      showSki: true,
      showEdu: false,
      showProj: false,
      showCon: false
    }
    this.showS = this.showS.bind(this);
    this.showE = this.showE.bind(this);
    this.showP = this.showP.bind(this);
    this.showC = this.showC.bind(this);
  }
  
  showC(){
    this.setState({
      showCon: true,
      showEdu: false,
      showProj:false,
      showSki: false
    })
  }
  
  showE(){
    this.setState({
      showCon: false,
      showEdu: true,
      showProj:false,
      showSki: false
    })
  }
  
  showP(){
    this.setState({
      showCon: false,
      showEdu: false,
      showProj:true,
      showSki: false
    })
  }
  
    showS (){
      this.setState({
        showCon: false,
        showEdu: false,
        showProj:false,
        showSki: true
      })
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SUKANYA VIJAYAKUMAR</h1><br/><br/>
          <p>javascript poetry<span> _</span></p>
        </header>
        <main>
          <div className='section-name' id={`section-${this.state.showSki}`} onClick={e=>{this.showS()}}>SKILLS</div>
          {this.state.showSki && <div className="section-content"><Skills/></div>}
          {/* <div className="section-name"  id={`section-${this.state.showEdu}`} onClick={e=>{this.showE()}}>EDUCATION</div>
          {this.state.showEdu && <div className="section-content"><Education/></div>} */}
          <div className="section-name"  id={`section-${this.state.showProj}`} onClick={e=>{this.showP()}}>PROJECTS</div>
          {this.state.showProj && <div className="section-content"><Projects/></div>}
          <div className="section-name"  id={`section-${this.state.showCon}`} onClick={e=>{this.showC()}}>CONTACT</div>
          {this.state.showCon && <div className="section-content"><Contact/></div>}
      </main>
      </div>
    );
  }
}

export default App;
