import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Cats from "./components/Cats";
import CatDetails from "./components/CatDetails.js";
import Footer from "./components/Footer";
import CreateEditCat from "./components/CreateEditCat";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/cats/:id" element={<CatDetails />} />
        <Route path="/createEditCat" element={<CreateEditCat />} />
        <Route path="/breed/:breed" element={<Cats />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
