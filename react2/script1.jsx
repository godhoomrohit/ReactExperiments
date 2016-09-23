var Card= React.createClass({
  getInitialState: function(){
    return {};
  },
  componentDidMount: function(){
    var that = this;
    $.get('https://api.github.com/users/'+this.props.login, function(data){
      that.setState(data);
    })
  },
  render: function(){
    return(
      <div>
        <img src={this.state.avatar_url} width="80" />
        <h2>{this.state.name}</h2>
        <hr />
      </div> 
    );
  }
});

var Myform = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var gitnamea = ReactDOM.findDOMNode(this.refs.gitname);
    this.props.addCard(gitnamea.value)
    gitnamea.value = ''; 
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="name" ref="gitname" />
        <button type="submit">Sumbit</button>
      </form>
    );
  }
});

var Main = React.createClass({
  getInitialState: function(){
    return{
      logins:[]
    }
  },
  addCard: function(card){
    this.setState({
      'logins':this.state.logins.concat(card)
    })
  },
  render: function(){
    var cards = this.state.logins.map(function(login){
      return(<Card login={login} />)
    })
    return(
        <div> 
          <Myform addCard={this.addCard} /> <br /><br />
          {cards}
        </div>
    );  
  }
});

ReactDOM.render(<Main />, document.getElementById('root1'));