import React from "react";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";
import Hero from "../../components/Hero/Hero";
import State from "../../components/State/State";
import { useLoaderData } from "react-router";

const Home = ()  => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>
           <State></State>

           <Apps data={data}></Apps>
        </div>
    );
};

export default Home ;