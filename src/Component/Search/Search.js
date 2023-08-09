import "./Search.css";
import React from "react";

const Search = ({ value, setValue }) => {
  return (
    <div className="search-wrapper d-flex flex-md-row flex-column justify-content-center align-items-center gap-2">
      <input
        className="form-control search-field"
        placeholder="Restaurent name or..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
