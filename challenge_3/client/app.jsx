//npm start
//npm run babel
//mongo
//mongod
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [{}],
      value: '',
      next: [],
      server: 'http://127.0.0.1:3000/data'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.send = this.send.bind(this);
  }

  handleChange(event, id) {
    var val = event.target.value;
    this.setState({value: val});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.send(this.state.value);
  }
  handleClick() {
    this.setState({next: ['F1', 'F2', 'F3']});
  }
  send(value) {
    let dataToSend = {name: value};
    $.ajax({
      url: this.state.server,
      type: 'POST',
      data: JSON.stringify(dataToSend),
      contentType: 'application/json',
      success: function() {
        console.log(value, 'message sent')
      },
      error: function(error) {
        console.log('error');
    // if (this.state.next.length === 0) {
    //   <F0 handleClick={this.handleClick}>
    // } else {
    //   <F1 handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    // }
      }
    });
  }
  render() {
    var next = this.state.next;
    var page = this.state.next[0];
    if (next.length === 0) {
      return <F0 handleClick={this.handleClick}/>
    }
    
    return (
      <div id="App"><h1>Multistep Checked Experience</h1>
      <F1 onSubmit={this.handleSubmit} onChange={this.handleChange}/>

      <div>{this.state.next}</div>
      </div>
    )
  }
}


var F0 = function(props) {
  return (
    <div>
    <button id="checkout" onClick={props.handleClick}>Checkout</button>
    </div>
  )
}

var F1 = function(props) {
  return (
  <form onSubmit={props.handleSubmit}>
    <label>
      Name:
      <input id="name" type="text" onChange={props.handleChange}/>
    </label>
      <label>
      Email:
      <input id="email" type="text"/>
    </label>
      <label>
      Password:
      <input id="password" type="text"/>
    </label>
    <input type="submit" value="Submit"/>
  </form>
  )
}

var F2 = function(props) {
  return (
  <form onSubmit={props.handleSubmit}>
    <label>
      Line1:
      <input id="line1" type="text" onChange={props.handleChange}/>
    </label>
      <label>
      Line2:
      <input id="line2" type="text"/>
    </label>
      <label>
      City:
      <input id="city" type="text"/>
    </label>
      <label>
      State:
      <input id="state" type="text"/>
    </label>
    <label>
      Zip:
      <input id="zip" type="text"/>
    </label>
      <input type="submit" value="Submit"/>
  </form>
  )
}

var F3 = function(props) {
  return (
  <form onSubmit={props.handleSubmit}>
    <label>
      Credit Card #:
      <input id="creditcard" type="text" onChange={props.handleChange}/>
    </label>
      <label>
      Expiry Date:
      <input id="expirydate" type="text"/>
    </label>
      <label>
      CVV:
      <input id="cvv" type="text"/>
    </label>
    <label>
      Billing Zip Code:
      <input id="billingzipcode" type="text"/>
    </label>
    <input type="submit" value="Submit"/>
  </form>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

