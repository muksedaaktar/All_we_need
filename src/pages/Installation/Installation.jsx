import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../Utility/addToDB";
import AppCard from "../../components/AppCard/AppCard";
import toast from "react-hot-toast";


const Installation = () => {

    const [appList,setAppList]=useState([])
     const [sort,setSort]=useState("");
     

    const data =useLoaderData();
    console.log(data)


    useEffect(()=>{
        const storeAppData=getStoredApp();
       
        const ConvertedStoredApps=storeAppData.map(id=>parseInt(id))
        console.log(ConvertedStoredApps)
        const myInstalledApp=data.filter(app=>ConvertedStoredApps.includes(app.id));
        
       setAppList(myInstalledApp)
    },[] )

const handleSort = (type) => {
    setSort(type)

    if(type==="ascending"){

          const sortedByAscending=[...appList].sort((a,b)=>a.downloads-b.downloads);
          setAppList(sortedByAscending)
    }
    if(type==="descending"){

          const sortedByDescending=[...appList].sort((a,b)=>b.downloads-a.downloads);
          setAppList(sortedByDescending)
    }

     
}

const handleUninstall = (id) => {
    
    const updatedList = appList.filter(app => app.id !== id);
    setAppList(updatedList);

    
    const stored = getStoredApp(); 
    const filtered = stored.filter(item => parseInt(item) !== id);
    localStorage.setItem("installed-apps", JSON.stringify(filtered));

    
    toast.success("App Uninstalled Successfully!");
};


    return (
        <div>
           <div>
          <h1 className="text-3xl text-center p-2 text-black font-bold"> Your Installed Apps</h1>
          <p className="text-center p-4">Explore All Trending Apps on the Market developed by us</p>
         </div>

         <div>
            <div className="flex gap-16">
            <h1 className="font-bold">{appList.length} Apps Found</h1>

            <div className="dropdown ml-auto">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size : {sort?sort:""}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("ascending")}>ascending</a></li>
    <li><a onClick={()=>handleSort("descending")}>descending</a></li>
  </ul>
</div>
</div>
           {
    appList.map(app => (
        <AppCard 
            key={app.id} 
            singleApp={app}
            handleUninstall={handleUninstall}
        />
    ))
}

        </div>
        </div>
    );
};

export default Installation ;