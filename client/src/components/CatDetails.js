import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axiosInstance";

export default function CatDetails() {
  const [cat, setCat] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/cats/details/${id}`)
      .then((res) => setCat(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleRemove = () => {
    axios
      .delete(`/api/cats/details/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };

  return (
    <div
      key={cat._id}
      className="md:container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <div className="rounded overflow-hidden shadow-xl">
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
        <div className="px-6 py-4">
          <button onClick={handleRemove} className="btn btn-blue">
            Delete Cat
          </button>
        </div>
      </div>
    </div>
  );
}
