import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const name = "CS 499";

// const user = {
//   firstName: "Luke",
//   lastName: "Skywalker",
//   email: "TheLastJedi@gmail.com"
// };
const user = null;

function formatPersonName(person) {
  return `${person.lastName}, ${person.firstName}`;
}

function getUserEmailLink(person) {
  return (
    <a href={`mailto:${person.email}`}>
      {formatPersonName(person)}
    </a>
  );
}

function getGreeting(person) {
  // if (person) {
  //   return <h1 className="title">Hello {getUserEmailLink(user)}</h1>
  // } else {
  //   return <h1>Hello, stranger</h1>
  // }
  return (
    <h1 className="title">
      Hello, {person ? getUserEmailLink(person) : "stranger"}
    </h1>
  );
}

// const element = React.createElement("h1", null, "Hello world!");
// const element = (
//   <div id="the-div">
//     {getGreeting(user)}
//     <img src="http://placekitten.com/480/480" />
//   </div>
// );

function Greeting(props) {
  console.log("== props:", props)
  return <h1>Hello {props.name}!</h1>;
}

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleString()}!!!!</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  tick() {
    // this.state.date =
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Card>
        <Greeting name="Luke Skywalker" />
      </Card>
      <Card>
        <Greeting name="Leia Organa" />
      </Card>
      <Card>
        <Greeting name="Rey" />
      </Card>
      <Card>This is a string</Card>
      <Card>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <Card>Nested card</Card>
      </Card>
    </div>
  )
}

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello {this.props.name}!</h1>;
//   }
// }

const element = <Greeting name="Luke Skywalker" anotherProp="some value" />

console.log("== element:", element);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function tick() {
  ReactDOM.render((
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  ),
    document.getElementById('root')
  );
}

setInterval(tick, 1000)


// ReactDOM.render(
//   element,
//   document.getElementById('root2')
// );
