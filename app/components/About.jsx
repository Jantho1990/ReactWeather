var React = require('react');

var About = (props) => (
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a simple weather application built by Josh Anthony for the Complete React Web App Developer course on Udemy. To use, go to the Get Weather page and type a city name and state into the search bar. You can also use the search bar at the top of the page.</p>
    <br/>
    <p>Built with <a href="https://facebook.github.io/react/">ReactJS</a> and <a href="http://openweathermap.org/">Open Weather Map</a>.</p>
  </div>
);

module.exports = About;
