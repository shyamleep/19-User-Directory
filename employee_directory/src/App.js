import logo from "./logo.svg";
import "./App.css";
import api from "../utils/api";
import Search from "../src/components/Search";
import SearchResults from "../src/components/SearchResults";
import Wrapper from "../src/components/Wrapper"

class App extends React.Component {
state = {
  searchEntry: "",
  allEmployees: [],
  filteredEmployees: []
}

componentDidMount () {
  api.getAllEmployees()
    .then(res => {
      const employees = res.data.results;
      this.setState({
        allUsers: employees,
        filteredEmployees: employees
      })
    })
    .catch(error => console.log(error))
};

handleInputChange = (e) => {
  this.setState({searchEntry: e.target.value})
}

render() {
  return ( 
  <div>
    <Wrapper>
      <Search searchEntry={this.state.searchEntry} handleInputChange={e => this.handleInputChange(e)}/>
      <SearchResults />
    </Wrapper>
  </div>
  
  )}
};


export default App;
