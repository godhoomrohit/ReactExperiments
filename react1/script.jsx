var Btn = React.createClass({
  render: function(){
    return(
      <button onClick={this.clickHandler}>{this.props.dispTextL}</button>
    );
  },
  clickHandler: function(){
    this.props.clickHandler()
  }
});

var TextDiv = React.createClass({
  render: function(){
    return(
      <div>{this.props.dispTextL}</div>
    );
  }
});

var Main = React.createClass({
   getInitialState: function(){
    return{
      dispText: 'hi',
      dispText1: 'hi1'
    };
  },
  clickHandler: function(){
    this.setState({
      dispText1: "bye" 
    });
  },
  render: function(){
    return(
      <div>
      <Btn dispTextL={this.state.dispText} clickHandler={this.clickHandler} />
      <TextDiv dispTextL={this.state.dispText1} />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));