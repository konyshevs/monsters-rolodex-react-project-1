import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/cardList/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], searchFiels: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => this.setState({ searchFiels: e.target.value });

  render() {
    const { monsters, searchFiels } = this.state;
    const filteredMonsterts = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiels.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsterts} />
      </div>
    );
  }
}

export default App;
