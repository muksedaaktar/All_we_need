import React, { useState } from "react";
import App from "../App/App";
import { useLoaderData } from "react-router";
import NoAppFound from "../../components/NoAppFound/NoAppFound";


const HeroApp = () => {
  const data = useLoaderData(); 
  const [search, setSearch] = useState("");

  
  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      
      <div>
        <h1 className="text-3xl text-center p-2 text-black font-bold">
          Our All Applications
        </h1>
        <p className="text-center p-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

     
      <div className="flex gap-2 p-4">
        <h1 className="font-bold">({filteredApps.length}) Apps Found</h1>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered ml-auto w-24 md:w-auto 
          transition-all duration-300 focus:w-64 focus:shadow-lg"
        />
      </div>
        
        {filteredApps.length === 0 ? (
    <NoAppFound />
) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredApps.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp} />
        ))}
    </div>
)}


      
      
      </div>
    
  );
};

export default HeroApp;