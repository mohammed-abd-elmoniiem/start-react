import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";




export default function LineStar(){

    const svgRef = useRef()

    gsap.registerPlugin(useGSAP)



        function star(rad,X,Y){
    
             const Points =[];
    
             const phase = 0.045;
       
    
            for(let i = 0 ; i<5 ;i++){
                Points.push({x:rad*2*Math.cos((i/5 - 0.1 +phase )*2*Math.PI  ), y:rad*2*Math.sin((i/5 - 0.1  +phase)*2*Math.PI )})
                Points.push({x:rad*Math.cos((i/5  + phase)*2*Math.PI ), y:rad*Math.sin((i/5 +phase )*2*Math.PI )})
    
            }
    
            return `M${X+Points[0].x} ${Y+Points[0].y} ${Points.map( ({x,y})=>`L${X+x} ${Y+y}` ).join(' ')} z`;
    
    
        }

        useGSAP(()=>{

            gsap.from(svgRef.current,{
                duration:5,
                rotateZ:360,
                scale:0,
                // repeat:-1,
                transformBox:'fillBox',
                transformOrigin:'center center',

                ease:'elastic',
                delay:0,
            })

            gsap.from('svg path.line',{
                duration:1,
                scaleX:0,
                transformOrigin:'center'
                
            })

            

        })


    return(
        <>
        <svg className="sm:col-start-1 sm:col-end-3  mx-auto" width={200} height={30}>

                        <path className="line" d='M0 15 L80 15 M120 15 L200 15 ' fill="none" strokeWidth='3.5 ' stroke="black"/>
        
                        <path ref={svgRef}  d={star(4,100,15)} fill="black" strokeWidth='3 ' strokeLinejoin="round"  stroke="black"/>
        
                    </svg>
        </>
    )
}