import { useRef } from "react"


export default function Card({path}){

    const cardRef = useRef()


    return(
        <>
        <div className="rounded-2xl overflow-hidden relative"
          onClick={(eve)=>{
        
            cardRef.current.classList.replace('hidden','flex')

          }}
        >
            <img src={path} alt={path}/>

            <div className="absolute inset-0 bg-red-600 flex justify-center items-center opacity-0 hover:opacity-100 duration-500"> 
                <i className="fa fa-plus text-9xl"></i>
            </div>



        </div>

        <div ref={cardRef}  className="fixed inset-0 z-50  p-5 bg-[#00000028] backdrop-blur-[2px] backdrop-grayscale-100  hidden flex justify-center items-center " 

        onClick={(eve)=>{
            if(eve.target == cardRef.current) eve.target.classList.replace('flex','hidden')
            
        }}
        
        >

             <img className="w-125 " src={path} alt={path}/>

        </div>
        </>
    )
}