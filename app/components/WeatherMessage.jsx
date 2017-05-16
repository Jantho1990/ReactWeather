var React = require('react');

var WeatherMessage = ({temp, location}) => (
  <div>
    <p>It is currently {temp}&#176; in {location}!</p>
  </div>
);

module.exports = WeatherMessage;
