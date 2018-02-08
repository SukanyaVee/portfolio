import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <form>
          <input placeholder="NAME"/><br/><br/>
          <input placeholder="EMAIL"/><br/><br/>
          <textarea placeholder="MESSAGE"/><br/><br/>
          <button>Reach out!</button>
        </form>
        
      </div>
    );
  }
}

export default Contact;
