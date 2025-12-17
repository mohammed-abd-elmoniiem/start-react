import P from "../components/p";

import Title from "../components/title";



export default function About(){


   
  

    return(
        <>
        <div className=" container-sm grow   py-20 grid grid-cols-1 sm:grid-cols-2 justify-center  gap-8  bg-white
        ">


            <div className="col-start-1 -col-end-1 pb-8">
                <Title Str="about component"></Title>
            </div>
         

            

            <P/>
            <P/>

            
        </div>
        
        </>
    )
}