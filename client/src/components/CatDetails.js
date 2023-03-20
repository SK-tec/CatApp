import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
    <div key={cat._id} className="md:container mx-auto p-10 ">
      <div className="rounded grid grid-cols-2 gap-10">
        <div>
          <img className="mx-auto  h-5/6" src={cat.url} alt={cat.breed} />
        </div>

        <div className=" py-4">
          <div className="font-bold text-xl mb-2 text-amber-700">Breed: {cat.breed}</div>
          <p className="font-bold text-gray-700 text-base mt-5 mb-3">
            Temperament: {cat.temperament}
          </p>
          <hr />
          <p className="text-gray-700 text-base mt-5 text-justify leading-loose text-lg ">{cat.description}</p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-bold text-gray-700 mr-2 mb-2">
              Life Span: {cat.life_spanMin} - {cat.life_spanMax} years old
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-bold text-gray-700 mr-2 mb-2">
              From: {cat.origin}
            </span>
          </div>
          
          <div className="px-6 py-4">
            <Link to={`/createEditCat/${cat._id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5">
                Update Cat
              </button>
            </Link>
            <button
              onClick={handleRemove}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5"
            >
              Delete Cat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
