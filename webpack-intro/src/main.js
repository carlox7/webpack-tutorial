import React from 'react';
import ReactDom from 'react-dom'

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <header className='hello-navbar'>
        <h1> counter </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){
    console.log('event', e)

    this.setState(oldState => {
      return {
        count: oldState.count + 1
      }
    })
  }

    render(){
      return(
       <div>
        <Navbar />
        <p onClick={this.handleClick}> counter: {this.state.count} </p>
       </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
