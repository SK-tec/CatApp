import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "../axiosInstance";

export default function Cats() {
  const [cats, setCats] = useState([]);
  const { breed, query } = useParams();
  let path = useLocation().pathname;

  useEffect(() => {
    if (breed) {
      axios
        .get(`/api/cats/breed/${breed}`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    } else if (query) {
      axios
        .get(`/api/cats/${query}`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    } else if (path === "/wwc") {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_t2TNdxX3yorJpjmAPnHk3TlljQsVC6K8FygnYLo5m0jE6gx5ll6UvxDvN5Wo1xbF`
        )
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    } else {
      axios
        .get(`/api/cats`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    }
  }, [breed, query, path]);

  const moreCats = () => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_t2TNdxX3yorJpjmAPnHk3TlljQsVC6K8FygnYLo5m0jE6gx5ll6UvxDvN5Wo1xbF`
      )
      .then((res) => setCats(...cats, res.data))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1 className="mt-5 text-3xl">
        {path === "/wwc" ? "Worldwide Cats" : "Our Cats"}
      </h1>
      <div className="md:container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {cats.map((cat) => (
          <Link
            to={path === "/wwc" ? `/wwc/cat/${cat.id}` : `/cat/${cat._id}`}
            className="cat-card"
            key={path === "/wwc" ? cat.id : cat._id}
          >
            <div className="rounded overflow-hidden shadow-xl">
              <img
                className="w-full"
                src={cat.url}
                alt={path === "/wwc" ? "Random cat" : cat.breed}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "40% 0",
                }}
              />
              {path !== "/wwc" && (
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{cat.breed}</div>
                </div>
              )}
            </div>
          </Link>
        ))}
        {path === "/wwc" && (
          <div className="col-span-3 text-center">
            <button
              onClick={moreCats}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5"
            >
              Load more cats...
            </button>
          </div>
        )}
      </div>
    </>
  );
}
