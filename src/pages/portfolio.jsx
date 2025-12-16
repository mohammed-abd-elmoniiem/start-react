import Card from "../components/card";
import Title from "../components/title";



export default function Portfolio(){

    const products = ['port1.png','port2.png','port3.png','port1.png','port2.png','port3.png']



    return(
        <>
        <div className="portfolio px-3 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
            <div className=" col-start-1 -col-end-1">
                 <Title Str="portfolio component"/>
            </div>

           
             {products.map((ele)=><Card key={ele} path={`./src/assets/images/${ele}`} />)}
             {/* {products.map((ele)=><Card key={ele} path={`./src/assets/images/${ele}`} />)} */}

            {/* <Card path={'./src/assets/images/poert1.png'} />
            <Card path={'./src/assets/images/poert1.png'} />
            <Card path={'./src/assets/images/poert1.png'} />
            <Card path={'./src/assets/images/poert1.png'} />
            <Card path={'./src/assets/images/poert1.png'} />
            <Card path={'./src/assets/images/poert1.png'} /> */}

        </div>
        
        </>
    )
}