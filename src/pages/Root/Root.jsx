import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";


const Root = ()  => {
    return (
        <div className="max-w-6xl mx-auto">
          <Navbar></Navbar>
          <Banner></Banner>
          <Hero></Hero>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root ;