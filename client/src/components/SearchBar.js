import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../Images/search.svg";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };
  return (
    <div className="search-container bg-yellow-700">
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="search-content">
          <input
            placeholder="Search for cool cats"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" className="">
            <img src={SearchIcon} alt="Search" />
          </button>
        </form>
      </div>
    </div>
  );
}
