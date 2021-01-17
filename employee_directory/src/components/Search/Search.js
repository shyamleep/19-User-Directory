import React from "react";

function Search(props) {
    return (
        <form className="search">
            <div>
                <input
                value={props.searchEntry}
                onChange={props.handleInputChange}
                type="text"
                className="form-control"
                id="search"
                placeholder="Type an employee's name to search"
                />
            </div>
        </form>
    )
};

export default Search; 
