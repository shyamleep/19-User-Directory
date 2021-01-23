import React from "react";
import "./App.css";
import api from "./utils/api.js";
import Search from "../src/components/Search/Search.js";
import SearchResults from "../src/components/SearchResults/SearchResults.js";
import Wrapper from "../src/components/Wrapper/Wrapper.js";
import util from "util";

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

firstNameSearch = (employeeObject) => {
  // console.log(employeeObject.name.first);
  // console.log(this.state.searchEntry)
  // console.log (employeeObject.name.first.includes(this.state.searchEntry)) 
  // console.log(this.state)
  return employeeObject.name.first.includes(this.state.searchEntry) 
}

handleFilter = (e) => {
  console.log("handleFilter!")
  const newFilteredEmployees = this.state.allEmployees.filter(this.firstNameSearch)
  this.setState({...this.state, newFilteredEmployees})
}


// handleInputChange = async (e) => {
//   console.log(e.target.value)
//   console.log("handleinputchange")
//   let promise = new Promise((resolve, reject) => {
//     console.log("handleFilter!")
//   const newFilteredEmployees = this.state.allEmployees.filter(this.firstNameSearch)
//   this.setState({...this.state, newFilteredEmployees});
//   });
//   promise.then(function(result) {
//     console.log(result)
//   });

  // const setStateSearch = util.promisify(() => this.setState({searchEntry: e.target.value}))
  // const searchSet = await setStateSearch
  // searchSet.then(this.handleFilter(e))


handleInputChange = event => {
  console.log(this)
  console.log(event.target.value);
  const filter = event.target.value;
  const filteredList = this.state.allEmployees.filter(item => {
    // merge data together, then see if user input is anywhere inside
    let values = Object.values(item)
      .join("")
      .toLowerCase();
    return values.indexOf(filter.toLowerCase()) !== -1;
  });
  console.log(this.state.filteredEmployees)
  this.setState({ filteredEmployees: filteredList });
}



render() {
  return ( 
  <div>
    <Wrapper>
      <Search searchEntry={this.state.searchEntry} handleInputChange={this.handleInputChange}/>
      <SearchResults employeeList={this.state.allEmployees}/>
    </Wrapper>
  </div>
  
  )}
};

export default App;
