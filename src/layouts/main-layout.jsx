import { Outlet } from "react-router";
import Nav from "../components/nav";
import Footer from "../components/footer";


export default function MainLayout(){



    return(
        <>
        <div className="w-full   min-h-screen bg-emerald-50 container mx-auto flex flex-col justify-between ">
            <Nav></Nav>

            <Outlet/>

            <Footer/>
        </div>
        
        </>
    )
}