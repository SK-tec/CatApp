import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../axiosInstance";

export default function CatDetails() {
  const [cat, setCat] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((res) => {console.log(res.data);
      setCat(res.data)})
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
      <div className="rounded grid grid-cols-1 gap-10">
        <div>
          <img className="mx-auto  h-5/6" src={cat.image?.url} alt={cat.breed} />
        </div>

        <div className=" py-4">
          <div className="font-bold text-xl mb-2 text-amber-700">Breed: {cat.name}</div>
          <p className="font-bold text-gray-700 text-base mt-5 mb-3">
            Temperament: {cat.temperament}
          </p>
          <hr />
          <p className="text-gray-700 text-base mt-5 text-justify leading-loose text-lg ">{cat.description}</p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-bold text-gray-700 mr-2 mb-2">
              Life Span: {cat.life_span}  years old
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-bold text-gray-700 mr-2 mb-2">
              From: {cat.origin}
            </span>
          </div>

        <div>
        <a href={cat.wikipedia_url} className=" text-blue-600 font-bold no-underline hover:underline ..." target="_blank">Find more on Wiki</a>
        </div>
          
          
        </div>
      </div>
    </div>
  );
}
