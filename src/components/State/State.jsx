import React from "react";

const State = ()  => {
    return (



    <section className="w-full bg-linear-to-r from-[#632EE3]  to-[#9F62F2] text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">

       
        <h1 className="text-2xl md:text-3xl font-bold">
          Trusted By Millions, Built For You
        </h1>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          
          <div>
             <p className="text-sm opacity-90 mt-1">Total Downloads</p>
            <h1 className="text-4xl font-extrabold">29.6M</h1>
            <p className="text-xs opacity-80">21% More Than Last Month</p>
          </div>

          
          <div>
            <p className="text-sm opacity-90 mt-1">Active Users</p>
            <h1 className="text-4xl font-extrabold">906K</h1>
            
            <p className="text-xs opacity-80">11% More Than Last Month</p>
          </div>

          
          <div>
             <p className="text-sm opacity-90 mt-1">Apps Launched</p>
            <h1 className="text-4xl font-extrabold">132+</h1>
           
            <p className="text-xs opacity-80">3 More This Month</p>
          </div>

        </div>
      </div>
    </section>
  );
};



export default State ;