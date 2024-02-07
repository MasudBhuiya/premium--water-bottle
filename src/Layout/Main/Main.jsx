import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    const navigation = useNavigation();
    return (
        <div className="">
            <Navbar></Navbar>
            <div>
                {navigation == 'loading' && 'loading...'}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;