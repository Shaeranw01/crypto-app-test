"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [cities, setCities]=useState(["London", "Paris"]);
  const [value, setValue]= useState("");
  const handleChange=(e)=>{
    setValue(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCities([...cities, value]);
    setValue("");
  };
  return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={value}/>
            </form>
            <ul>
            {cities.map(city=>
           <li key={city}> <Link href={`/city/${city}`}>{city}</Link></li>
            )}  
            </ul>
        </div> 
  );
}