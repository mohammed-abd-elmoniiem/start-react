import { Link, NavLink } from "react-router"
import Li from "./li"

import '@fortawesome/fontawesome-free/css/all.css'
import { useRef } from "react";


export default function Nav(){

    const ulRef= useRef()


    const links = ['home','about','portfolio','contact'];

    function displayUl(){
        console.log(ulRef)
        
            ulRef.current.classList.replace('hidden','flex');
        
        
    }

    function hiddenUl(e){

        if(e.target != ulRef)
         
            ulRef.current.classList.replace('flex','hidden');
        

    }







    return(
        <>

        <nav className=" sticky z-50 top-0 right-0 left-0 h-18 flex justify-between items-center  container-sm py-3 bg-neutral-950 text-white" >
            <div className="logo uppercase text-2xl">
                <Link to='/home'>start framework</Link>
                
            </div>

            <div className="sm:hidden peer "  onClick={()=>{
                displayUl()

            }} >
                <i className="fa fa-bars  "></i>
            </div>

            

            <ul ref={ulRef} className="hidden absolute sm:static  top-0  right-0 w-1/2 sm:w-fit h-screen sm:h-fit sm:flex flex-col items-start sm:flex-row gap-3 backdrop-blur-md bg-[#05050560]  sm:bg-transparent px-4 py-12 sm:p-2 capitalize font-light"
                    onClick={e=>{
                    hiddenUl(e)
                        }} 
            
            >

            <li className="self-end sm:hidden">
                <i className="fa fa-close"></i>
            </li>
             
             
            {links.map(link=> <Li key={link} link={link}/>)
            }
 
            </ul>


        </nav>
        </>
    )
}