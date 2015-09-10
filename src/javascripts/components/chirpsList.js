var React = require("react");
var ChirpBox = require("./chirpBox.js");


var ChirpsList = React.createClass({
  render: function(){
    var chirps = [[], [], []];
    this.props.chirps.map(function(chirp, i){
      var _chirp = (
        <ChirpBox chirp={chirp} key={chirp.id} />
      );
      chirps[i%3].push(_chirp);
    });
    console.log(chirps);
    return (
      <div className="row">
        <div className="col-md-4">
          {chirps[0]}
        </div>
        <div className="col-md-4">
          {chirps[1]}
        </div>
        <div className="col-md-4">
          {chirps[2]}
        </div>
      </div>
    )
  }
});


module.exports = ChirpsList;