import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import JokesList from './JokesList';
import Filters from './Filters';
import Jokes from '../data/data.json'
import PunchLine from './PunchLine';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: Jokes,
      inputType: ''
    }
  }

  //handler
  handleType = (inputType) => {
    this.setState(
      inputType
    )

  }

  //filters
  filteredJokes() {
    const jokes = [...this.state.jokes]
    const type = this.state.inputType
    return jokes
      .filter(joke => {
        return type === '' ? true : joke.type === type
      })
  }
  //render

  renderPunchLine = (props) => {
    const routeId = parseInt(props.match.params.id)
    const joke = this.state.jokes.find(item => {
      return item.id === routeId
    })
    if (joke === undefined) {
      return <p>Tu chiste no existe</p>
    } else {
      return <PunchLine jokes={joke} />
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Filters
              handleType={this.handleType}
              checked={this.state.inputType} />
            <JokesList jokes={this.filteredJokes()} />
          </Route>
          <Route path='/joke/:id' render={this.renderPunchLine}>
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
