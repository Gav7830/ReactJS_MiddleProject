import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="topContainer">
                <div className="logo">
                    <img src={'https://raw.githubusercontent.com/Gav7830/ReactJS_MiddleProject/main/Pictures/logo.png'} alt="I&G Rental Car">
                    </img>
                    <h1>I&G Rental Car</h1>
                </div>
            </div>

            <div className="topnav">
                <Link to="/AllVehicles">All Vehicles</Link>
                <Link to="/AddVehicle">Add Vehicle</Link>
                <Link to="/AboutUs">About Us</Link>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;