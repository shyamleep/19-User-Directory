import React from "react";
import "./App.css";
import api from "./utils/api.js";
import Search from "../src/components/Search/Search.js";
import SearchResults from "../src/components/SearchResults/SearchResults.js";
import Wrapper from "../src/components/Wrapper/Wrapper.js"

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
        allEmployees: employees,
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
      <SearchResults employeeList={this.state.allEmployees}/>
    </Wrapper>
  </div>
  
  )}
};

export default App;
