var React = require("react");
var actions = require("../actions");
var ChirpInput = require("./chirpInput");
var ChirpsStore = require("../stores/chirps");
var ChirpsList = require("./chirpsList")

var App = React.createClass({
  getInitialState: function(){
    return {
      chirps: ChirpsStore.all()
    }
  },

  componentDidMount: function(){
    ChirpsStore.addChangeListener(this.onChange)
  },

  componentWillUnmount: function(){
    ChirpsStore.removeChangeListener(this.onChange)
  },

  onChange: function(){
    this.setState(this.getInitialState())
  },

  render: function(){
    return (
      <div className="container">
        <h1 className="text-center"> Chirper </h1>
        <h3 className="text-center"> Search for any GIFs here. </h3>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <ChirpInput onSearch={this.handleSearch}/>
          </div>
        </div>

        <ChirpsList chirps={this.state.chirps} />

      </div>
    )
  },

  handleSearch: function(text){
    actions.chirp(text);
  }
});


module.exports = App;