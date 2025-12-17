


export default function Input({type,placeholder}){



    return(
        <>

        <div className="flex flex-col w-full max-w-100 shadow-2xl relative  ">

            <input type={type} placeholder={placeholder}
                className="bg-white w-full h-12 focus:outline-0 peer text-gray-950  z-20 px-2 rounded-lg"
                
                />

           <label htmlFor="" className=" absolute top-0 z-10 duration-500 opacity-100  -translate-y-6 capitalize text-gray-800 peer-placeholder-shown:translate-y-8 peer-placeholder-shown:opacity-0  "> {placeholder}:</label>
        </div>
        
        </>
    )
}