var React = require("react");

var ChirpInput = React.createClass({
  getInitialState: function(){
    return {
      value: ""
    }
  },

  render: function(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for..." onChange={this.handleChange} value={this.state.value} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleClick} >Go!</button>
        </span>
      </div>
    )
  },

  handleChange: function(evt){
    this.setState({
      value: evt.target.value
    });
  },

  handleClick: function(evt){
    this.props.onSearch(this.state.value);
    this.setState({
      value: ""
    });
  }
});


module.exports = ChirpInput;