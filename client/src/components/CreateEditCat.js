import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateEditCat() {
    
  const navigate = useNavigate();
  const [cat, setCat] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
    axios
      .get(`/api/cats/details/${id}`)
      .then((res) => {console.log(res.data.description)
        setCat(res.data)})
      .catch((e) => console.log(e));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat({ ...cat, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id){
    axios
      .put(`/api/cats/${id}`, cat)
      .then((res) => navigate(`/cat/${id}`))
      .catch((e) => console.log(e));
    }else{
        axios
      .post(`/api/cats`, cat)
      .then((res) => navigate(`/`))
      .catch((e) => console.log(e));
    }
  };

    return(
        <div className="flex justify-center my-8 w-full">
    <div className="w-1/2 bg-blue-300 rounded shadow-2xl p-8 m-2">
        <h2 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">{id ? "Update Cat" : "Add Cat"}</h2>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="breed">Breed</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="breed" value={id ? cat.breed:""} id="breed" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="temperament">Temperament</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="temperament" value={id?cat.temperament:""} id="temperament" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="url">URL</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="url" name="url" value={id ? cat.url:""} id="url" />
            </div>
             <div className="flex md:flex-cols-2 justify-around md:gap-6">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="life_spanMin">Min life expectancy</label>
                    <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="number" name="life_spanMin" value={id ? cat.life_spanMin:0} id="life_spanMin" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="life_spanMax">Max life expectancy</label>
                    <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="number" name="life_spanMax" value={id ? cat.life_spanMax:0} id="life_spanMax" />
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="origin">Origin</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="origin" value={id ? cat.origin :""} id="origin" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900">Description</label>
                 <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write Description here..." 
                onChange={handleChange} name="description" value={id ? cat.description:""}></textarea> 
            </div>
            <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">{id ? "Update" : "Add"} cat</button>
        </form>
    </div>
</div>
    );
}
