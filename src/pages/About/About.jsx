import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { FiDownload } from "react-icons/fi";
import { IoStarHalfSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { addToStoreDB, getStoredApp } from "../../Utility/addToDB";
import toast from "react-hot-toast";
import Rechart from "../../components/Rechart/Rechart";


const About = ()  => {
    
    const {id}= useParams();
    const AppId=parseInt(id);
    const data = useLoaderData();
 const singleApp =data.find(App =>App.id ===AppId);
const{image,description,title,downloads,ratingAvg,reviews} = singleApp;

const [installed, setInstalled] = useState(false);

useEffect(() => {
    const stored = getStoredApp();
    if (stored.includes(id)) {
      setInstalled(true);
    }
  }, [id]);
    const handleInstall = id => {
        addToStoreDB(id)
setInstalled(true);

    toast.success("App Installed Successfully!");
    }


    return (
      <section >
    <div
      className="flex  items-center gap-4 p-4  shadow-sm w-full max-w-6xl"
      style={{ background: "#f9f9f9" }}
    >
      
      <img
        src={image}
        alt=""
        className="w-60 h-80 rounded-lg object-cover"/>

     
      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="text-sm text-gray-800 mt-1">
          {description}
        </div>

       <div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-desc"><FiDownload /></div>
    <div className="stat-title font-bold">Downloads</div>
    <div className="stat-value font-bold">{downloads}</div>
    
  </div>

  <div className="stat">
    <div className="stat-desc"><IoStarHalfSharp /> </div>
    <div className="stat-title font-bold">Average Rating</div>
    <div className="stat-value font-bold">{ratingAvg}</div>
    
  </div>

  <div className="stat">
    <div className="stat-desc "><AiOutlineLike /> </div>
    <div className="stat-title font-bold">Total Reviews</div>
    <div className="stat-value font-bold">{reviews}</div>
    
  </div>
</div>

       
        <button
            onClick={() => handleInstall(id)}
            disabled={installed}
            className={`px-4 py-2 rounded-lg mt-3 w-fit text-white 
              ${installed ? "bg-green-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}
            `}
          >
            {installed ? "Installed " : "Install Now (291MB)"}
          </button>
      </div>
      
    </div>


     <div className="p-4">
      <Rechart />
    </div>

    <div className="flex flex-col flex-1">
        <h1 className="text-lg font-semibold">Description</h1>
        <p className="text-sm text-gray-600 mt-1">
          
This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
<br />
<br />
A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br />
<br />
For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
        </div>

   </section>  
  );
};



export default About ;