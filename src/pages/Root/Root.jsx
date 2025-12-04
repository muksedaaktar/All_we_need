import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";



const Root = ()  => {
    return (
        <div className="max-w-6xl mx-auto">
          <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root ;