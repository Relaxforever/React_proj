import React, {Component} from 'react';
import Counter from "./counter";
import Profile from "./profile";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      /*employees: [
        {
          name: "Bob",
          position: "Software engineer"
        },
        {
          name: "Stephanie",
          position: "CEO"
        },
        {
          name: "Jim",
          position: "CTO "
        }
      ]*/
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })

      });
  }

  render() {
    let {isLoaded, items} = this.state;
    if (!isLoaded){
      return <div>Loading ...</div>
    }
    else {
      return (
        <div className="App">
          <p>
            <h1>Blank Canvas</h1>
            <Counter/>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  Name: {item.name} | Email: {item.email}
                </li>
              ))}
            </ul>

            {
              /*this.state.employees.map(employee => {
                return (
                  <Profile name={employee.name} position={employee.position}></Profile>
                )
              })*/
            }
          </p>
        </div>
      );
    }
  }
}

export default App;
