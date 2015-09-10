var React = require("react");
// var ReactRouter = require("react-router");
var App = require("./components/app.js");

// var Router = ReactRouter.Route;

var API = require("./api.js");
var ChirpsStore = require("./stores/chirps.js");

API.fetchChirps();

React.render(<App/>, document.getElementById("app"));