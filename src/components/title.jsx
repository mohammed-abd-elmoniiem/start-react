import LineStar from "./svg";


export default function Title({Str}){


    return(
        <>
        <div className="w-full">

            <h2 className=" uppercase text-3xl text-center font-bold">{Str}</h2>

            <LineStar/>
        </div>
        
        </>
    )
}