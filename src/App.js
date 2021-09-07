import React, { Component } from "react";
import "./App.css";
import data from "./Data";
import CardList from "./CardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: data,
      searchField: "",
    };
  }

  render() {
    const { collections, searchField } = this.state;
    const filterCollections = collections.filter((collection) =>
      collection.title.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(collections)
    console.log(filterCollections)
    return (
      <div className="App">
        <input
          type="search"
          placeholder=" Search Your Movie"
          onChange={(e) => {
            this.setState({ searchField: e.target.value })
            }}
        />
        <CardList collections={filterCollections} />
      </div>
    );
  }
}
export default App;