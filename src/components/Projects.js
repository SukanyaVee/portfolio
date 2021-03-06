import React, { Component } from 'react';
import img from './project-placeholder.png';
import travel from '../assets/travel.png';
import indevr from '../assets/indevr.png';
import dollar from '../assets/dollar.png';
import portfolio from '../assets/icon.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section>
          <div className="proj-upper">
            <img src={travel||img}/>
            <div className="proj-title"><a href="https://travelateur.now.sh">Travelateur</a></div>
            <div className="proj-links"><a href="https://github.com/SukanyaVee/Travelateur" target="_blank"> See my code on GitHub</a></div>
          </div>
          <div className="techs"> React  &nbsp;|&nbsp; Redux  &nbsp;|&nbsp; Express  &nbsp;|&nbsp; PostgreSQL  &nbsp;|&nbsp; REFTful API  &nbsp;|&nbsp; geolocation  &nbsp;|&nbsp; bcrypt  &nbsp;|&nbsp; CSS</div>
            <br/>
          <div className="proj-lower">
            Travelateur is a travel-themed photo blogging website. The React+Redux app lets user register, login and upload photos and journal notes and displays them in a gallery style interface. Users upload their photo and journal entries along with geolocation information using Google Maps API. Users can also search for other users' posts based on destination (coming soon: bookmarking feature to save favorite photos and notes). Google Places API is used to make recommendations on users' search. 3rd party API Unsplash was used to create an inspiration board of popular attractions. The app was designed to be responsive to different devices. Users are authenticated at each session, and use full CRUD to communicate through an express server to manipulate a Postgres database that stores user data as well as the photo/journal entries of each user.<br/>
          </div>
        </section>
        <section>
          <div className="proj-upper">
            <img src={indevr||img}/>
            <div  className="proj-title"><a href="https://www.indevr.io">Indevr</a></div>
            <div className="proj-links"><a href="https://github.com/SukanyaVee/indevr" target="_blank"> See my code on GitHub</a></div>
          </div>
          <div className="techs"> React  &nbsp;|&nbsp; Redux  &nbsp;|&nbsp; Express  &nbsp;|&nbsp; PostgreSQL  &nbsp;|&nbsp; Auth0  &nbsp;|&nbsp; Unit and Endpoint Testing  &nbsp;|&nbsp; Git branching and merging</div>
            <br/>
          <div className="proj-lower">
            Indevr is a social project management app for software developers. Users can create and find projects they can build together with others, or find "friends" with similar interests to keep up on the leatest trends and news. It is a full stack website created usign React+Redux, Node/Express, PostGresSQL and 'glamor' styling package. 
            This is a group project created during my time at DevMountain. The primary takeaways from this group endeavor are Git versioning and branches for teams, and endpoint testing using Postman and Unit testing using Jest. 
          </div>
        </section>
        <section>
          <div className="proj-upper">
            <img src={dollar||img}/>
            <div className="proj-title">DollarAlly</div>
            <div className="proj-links"><a href="https://github.com/SukanyaVee/dollarally" target="_blank"> See my code on GitHub</a></div>
          </div>
          <div className="techs"> React  &nbsp;|&nbsp; Redux  &nbsp;|&nbsp; Express  &nbsp;|&nbsp; PostgreSQL  &nbsp;|&nbsp; ChartJS  &nbsp;|&nbsp; bcrypt </div>
            <br/>
          <div className="proj-lower">
            COMING SOON!<br/>
            This React app started life as an early no-database front-end project during my immersive program at DevMountain, but I have since made enhancements to make it a full stack website. Users can register/log in and log their monthly expenses tagged with certain categories. They can then view expenses by category or all their expenses as a chart or compare it with previous months. 
            (This is a work in progress. If the links don't work or the app doesn't function as intended, please be patient and check back in a bit.)
          </div>
        </section>
        <section>
          <div className="proj-upper">
            <img src={portfolio||img}/>
            <div className="proj-title">This portfolio</div>
            <div className="proj-links"><a href="https://github.com/SukanyaVee/dollarally" target="_blank"> See my code on GitHub</a></div>
          </div>
            <div className="techs">
               React  &nbsp;|&nbsp; Redux  &nbsp;|&nbsp; Express  &nbsp;|&nbsp; Nodemailer 
            </div>
            <br/>
          <div className="proj-lower">
            This React App is a full stack website that was developed using React and React-JSS. Express server/Nodemailer sends me your messages from the contact form. 
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
