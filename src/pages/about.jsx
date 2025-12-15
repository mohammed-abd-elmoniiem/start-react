import P from "../components/p";

import Title from "../components/title";



export default function About(){


   
  

    return(
        <>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 justify-center  gap-8 px-3 sm:px-20 bg-green-500
        ">


            <div className="col-start-1 -col-end-1">
                <Title Str="about component"></Title>
            </div>
         

            

            <P/>
            <P/>

            
        </div>
        
        </>
    )
}