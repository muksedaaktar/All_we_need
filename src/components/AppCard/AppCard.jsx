import { IoMdStar } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const AppCard = ({ singleApp, handleUninstall }) => {

   

    return (
        <div className="border p-4 bg-white rounded flex gap-16 mb-4">
            <img src={singleApp.image}alt="" className=" w-20 h-20" />
            <div>
            <h2 className="text-xl font-bold">{singleApp.title}</h2>
            <div className="flex gap-8">
                <span className="flex gap-0.5 items-center"><FiDownload />{singleApp.downloads}</span>
            <span  className="flex gap-0.5 items-center"><IoMdStar />{singleApp.ratingAvg}</span>
            <span> {singleApp.reviews}</span>
            </div>
             </div >
                <button  onClick={() => handleUninstall(singleApp.id)}   className="bg-green-600 text-white  px-8 py-0.5 rounded-lg mt-3 w-fit hover:bg-green-700 ml-auto">
          Uninstall
        </button>
            
           
        </div>
    );
};

export default AppCard;