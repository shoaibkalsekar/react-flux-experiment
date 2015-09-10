var React = require("react");

var ChirpBox = React.createClass({
  getInitialState: function(){
    return {
      chirpUrl: this.props.chirp.images.original_still.url
    }
  },

  render: function(){
    var chirp = this.props.chirp;
    return (
      <div className="chirpItem">
        <div className="chirpItem__img">
          <img className="img-responsive" src={this.state.chirpUrl} onMouseOver={this.changeImageUrlToGif} />
        </div>
        <div className="chirpItem__meta">
          <a href={chirp.url} className="chirpItem__btn--action">View Source</a>
        </div>
      </div>
    )
  },

  changeImageUrlToGif: function(e){
    this.setState({
      chirpUrl: this.props.chirp.images.original.url
    })
  }

});


module.exports = ChirpBox;