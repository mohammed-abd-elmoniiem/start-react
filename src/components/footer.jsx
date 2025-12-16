

export default function Footer(){

    const links =[
        {link:'https://www.facebook.com',
            icon:'fa-brands  fa-facebook'
        },
        {link:'https://www.linkedin.com',
            icon:'fa-brands  fa-linkedin'
        },
        {link:'https://www.twitter.com',
            icon:'fa-brands  fa-twitter'
        },
        {link:'#',
            icon:'fa fa-globe'
        },
    ]



    return(
        <>

        <div className="footer flex flex-col items-center sm:items-start  gap-12 sm:gap-8  text-amber-50 pt-15 sm:grid grid-cols-3">

            <div className="location flex flex-col items-center justify-start gap-2 h-full">
                <h2 className="uppercase font-bold text-2xl">
                    location
                </h2>
                <p className="capitalize    ">2215 john daniel drive</p>
                <p className="">Clark , MO 65243</p>
            </div>

            <div className="flex flex-col justify-center gap-4" >
                <h3 className="uppercase text-center text-2xl font-bold">
                    around the web
                </h3>
                <div className="flex gap-3 justify-center">

                    {
                        links.map(({link,icon})=>(<a href={link} className="w-8 h-8  rounded-full border flex justify-center items-center ">
                      <i className={icon} ></i>
                    </a>))
                    }
                    
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="uppercase text-center text-2xl font-bold">about freelancer</h3>
                <p className="text-center capitalize text-[15px] ">
                    freelancer is a free use ,
                    licensed bootstrap <br/> theme
                    created by route
                </p>
            </div>
            <div className=" w-full col-start-1 col-end-4 text-center py-4 bg-black capitalize text-[15px]">
                <p className="">
                    copyright your website 2025
                </p>
            </div>


        </div>
        
        </>
    )
}