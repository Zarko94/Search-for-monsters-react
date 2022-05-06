import react from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/search-box";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respones) => respones.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonester = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonester} />
      </div>
    );
  }
}
export default App;
