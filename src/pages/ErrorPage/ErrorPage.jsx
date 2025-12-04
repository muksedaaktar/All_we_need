import React from "react";
import Error from "../../assets/error-404.png"
const ErrorPage = ()  => {
    return (
        <div className="py-20 bg-white text-center">
        <div  className="flex justify-center items-center">
            <img src={Error} alt="" />
        </div>


        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold text-black mb-10 max-w-xl mx-auto leading-tight">Oops, page not found!</h1>
            <p className="text-xl text-gray-400 mb-10 max-w-5xl mx-auto">The page you are looking for is not available.</p>
           
                <div className="flex justify-center space-x-4 mb-20">
                <button className="btn bg-linear-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded">Go Back</button>



   
 

            </div>
          </div>
        
</div>
    );
};

export default ErrorPage ;