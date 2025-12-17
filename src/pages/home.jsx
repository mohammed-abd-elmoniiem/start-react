import LineStar from "../components/svg";
import Title from "../components/title";


export default function Home(){


    return (
        <>

        <div className="flex flex-col gap-5 items-center py-12  container-sm">
            <div className="w-44">
                <img className="" src="/images/avataaars.svg" alt="avatar " />
            </div>

            <Title Str = 'start framework'/>

            <p className="capitalize"> graphic artist  - web designer - illustrator </p>
        </div>
        
        </>
    )
}