import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Cats from "./components/Cats";
import CatDetails from "./components/CatDetails";
import Footer from "./components/Footer";
import CreateEditCat from "./components/CreateEditCat";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <Cats />
            </>
          }
        />
        <Route
          path="/:query"
          element={
            <>
              <SearchBar />
              <Cats />
            </>
          }
        />
        <Route
          path="/breed/:breed"
          element={
            <>
              <SearchBar />
              <Cats />
            </>
          }
        />
        <Route path="/cat/:id" element={<CatDetails />} />
        <Route path="/createEditCat" element={<CreateEditCat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
