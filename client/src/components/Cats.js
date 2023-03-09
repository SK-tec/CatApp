import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Cats() {
  const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL || 8000;
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
    {
      _id: 4,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 5,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 6,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 7,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 8,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 9,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 10,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 11,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 12,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 13,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 14,
      breed: "Bengal",
      temperament: "Active, cute, sweet, adorable",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
      life_spanMin: 12,
      life_spanMax: 18,
      origin: "India",
    },
    {
      _id: 15,
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
        .get(`${SERVER_BASE_URL}/api/cats/breed/${breed}`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    } else if (query) {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/api/cats/search/${query}`
        )
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    } else {
      axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/cats`)
        .then((res) => setCats(res.data))
        .catch((e) => console.log(e));
    }
  }, [SERVER_BASE_URL, breed, query]);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {cats.map((cat) => (
        <div key={cat._id} className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={cat.url} alt={cat.breed} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cat.breed}</div>
            <p className="text-gray-700 text-base">
              Temperament: {cat.temperament}
            </p>
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
      ))}
    </div>
  );
}
