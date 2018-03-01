import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

  constructor(){
    super();
    this.state = {
      name:'',
      org:'',
      email:'',
      message:''
    }
  }

  sendMessage(name, org, email, message){
    if (name && org && email && message) {
      axios
        .post('/message', {name:name, org:org, email:email, message:message})
        .then(res=>{

          document.getElementById('contact-form').innerHTML='<p>Message Sent! Thanks!</p>'
          this.setState({
            name:'',
            org:'',
            email:'',
            message:''
          })
        })
        .catch(error=>{console.log('nodemailer error', error)})
    }
  }


  render() {
    return (
      <div className="contact">
        <form id="contact-form">
          <input type="text" placeholder="NAME" value={this.state.name} onChange={e=>{this.setState({name: e.target.value})}}/><br/><br/>
          <input type="text" placeholder="ORGANIZATION" value={this.state.org} onChange={e=>{this.setState({org: e.target.value})}}/><br/><br/>
          <input type="text" placeholder="EMAIL" value={this.state.email} onChange={e=>{this.setState({email: e.target.value})}}/><br/><br/>
          <textarea placeholder="YOUR MESSAGE" cols="25" rows="15" value={this.state.message} onChange={e=>{this.setState({message: e.target.value})}}/><br/><br/>
          <input type="submit" value="Reach out!" onClick={e=>{this.sendMessage(this.state.name, this.state.org, this.state.email, this.state.message)}}/>
        </form>
      </div>
    );
  }
}

export default Contact;
