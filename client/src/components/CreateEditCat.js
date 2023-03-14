import { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function CreateEditCat() {
    
const navigate = useNavigate();
  const [cat, setCat] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCat({ ...cat, [name]: value });
    
  }; console.log(cat);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/cats`, cat)
      .then((res) => navigate(`/`))
      .catch((e) => console.log(e));
  };
    return(
        <>
        
        <div className="flex justify-center  my-8 w-full ">
    <div className="w-1/2 bg-blue-300 rounded shadow-2xl p-8 m-2">
        <h2 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add cat</h2>
        <form onSubmit={handleSubmit} >
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="first_name">Breed</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="breed" id="breed" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="last_name">Temperament</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="temperament" id="temperament" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="email">url</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="url" name="url" id="url" />
            </div>
             <div className="flex md:flex-cols-2 justify-around md:gap-6">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="password">life_spanMin</label>
                    <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="number" name="life_spanMin" id="life_spanMin" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-bold text-lg text-gray-900" for="password">life_spanMax</label>
                    <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="number" name="life_spanMax" id="life_spanMax" />
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900" for="password">origin</label>
                <input className="border py-2 px-3 text-grey-800" onChange={handleChange} type="text" name="origin" id="origin" />
            </div>
            <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Add cat</button>
        </form>
        
    </div>
</div>
</>
    );
}
