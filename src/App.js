import React, { lazy, Suspense, useState} from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Instamart from "./components/Instamart";

import UserContext from "./utils/UserContext";

const About = lazy(()=> import("./components/About"));


const AppLayout = () => {
    const [user, setUser] = useState({
            name : "Aneel",
            email : "aneel.grewal.009@gmail.com",
        }
    );

    return (
            <UserContext.Provider value={{user:user}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
    );
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>loading...</h1>}><About /></Suspense>,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Instamart />
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRoute} />);
