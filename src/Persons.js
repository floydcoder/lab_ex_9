import axios from 'axios';
import React, { Component } from 'react';
import PersonDetail from './PersonDetail';
export default class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount = () => {
    axios.get(`https://randomuser.me/api/?results=2`).then((res) => {
      console.log(res.data);
      // const persons = res.data.results;
      console.log(this.state);
      this.setState({ ...this.state, persons: res.data.results });
    });
  };

  render() {
    return (
      <div>
        <h4>User List</h4>
        {this.state.persons.map((person) => (
          <>
            <PersonDetail person={person} key={person.id.value} />
          </>
        ))}
      </div>
    );
  }
}
