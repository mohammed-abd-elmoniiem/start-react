import { useGSAP } from "@gsap/react";
import LineStar from "./svg";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";


export default function Title({Str}){

    // gsap.registerPlugin(SplitText)


    // useGSAP(()=>{

    //     const splitH2 =new  SplitText('h2.title',{type:'chars'})

    //     gsap.from(splitH2.chars,{
    //         duration:0.1,
    //         stagger:{
    //             each:0.05,
    //             from:'start'
    //         },
    //         opacity:0,
    //         x:-40,
            
            
    //         scale:1.2,
    //         onComplete:()=>{
    //             splitH2.revert()
    //         }
    //     })


    // })


    return(
        <>
        <div className="w-full">

            <h2 className=" title uppercase text-xl sm:text-3xl text-center font-bold">{Str}</h2>

            <LineStar/>
        </div>
        
        </>
    )
}