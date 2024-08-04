import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home/Home";
import Menu from "../Components/Menu/Menu";
import BookATable from "../Components/Reservations/BookATable";
import BookForFuture from "../Components/Reservations/BookForFuture";
import BookForToday from "../Components/Reservations/BookForToday";
import PrivateDining from "../Components/Reservations/PrivateDining";
import SignIn from "../Components/SignIn/SignIn";
import Main from "../Layouts/Main";

export const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/bookATable',
                element: <BookATable/>
            },
            {
                path: '/bookForToday',
                element: <BookForToday/>
            },
            {
                path: '/bookForFuture',
                element: <BookForFuture/>
            },
            {
                path: '/privateDining',
                element: <PrivateDining/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/signIn',
                element: < SignIn/>
            }
        ]
    }
])