import React, { Suspense,  useState } from "react";
import App from "../App/App";
import { Link } from "react-router";

const Apps = ({data})  => {
    const [allApps,setAllApps ] = useState([]);
    
    return ( 
        <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Trending Apps</h1>
          <p className="text-center p-4">Explore All Trending Apps on the Market developed by us</p>
          <Suspense fallback={<span>loading.....</span>}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
               data.slice(0, 9).map((singleApp) => (<App key={singleApp.companyName} singleApp={singleApp} />))

             }

             </div>
          </Suspense>
           <Link to='/Apps'>
       <div className="flex justify-center space-x-4 mb-20 p-4">
                <button className="btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded">Show All</button>



      </div>
</Link>
        </div>
    );
};

export default Apps ;