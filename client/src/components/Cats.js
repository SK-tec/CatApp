import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axiosInstance";

export default function Cats() {
  const [cats, setCats] = useState([
    {
      _id: 1,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 2,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 3,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
  ]);
  const { breed, query } = useParams();

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
    } else {
      axios
        .get(`/api/cats`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    }
  }, [breed, query]);

  return (
    <div className="md:container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {cats.map((cat) => (
        <Link to={`/cat/${cat._id}`} className="title">
          <div key={cat._id} className="rounded overflow-hidden shadow-xl">
            <img
              className="w-full"
              src={cat.url}
              alt={cat.breed}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                objectPosition: "40% 0",
              }}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{cat.breed}</div>
              <p className="text-gray-700 text-base">{cat.temperament}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {cat.life_spanMin} - {cat.life_spanMax} years old
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                from {cat.origin}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
