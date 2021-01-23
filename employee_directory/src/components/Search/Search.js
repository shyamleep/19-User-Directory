import React from "react";
import Button from "react-bootstrap/Button";


function Search(props) {
    return (
        <form className="search">
            <div>
                <input
                    // value={props.searchEntry}
                    onChange={props.handleInputChange}
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Type an employee's name to search"
                />
                {/* <Button variant="dark" onClick={props.handleFormSubmit}>Submit</Button> */}
                </div>
        </form>
    )
};

export default Search; 
