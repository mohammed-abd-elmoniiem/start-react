import Input from "../components/input";
import Title from "../components/title";


export default function Contact(){



    return(
        <>

        <div className="contact py-8 flex flex-col items-center  w-full">

            <div className="">
                <Title Str={'conatct section'}/>
            </div>

            <div className="input flex flex-col items-center gap-8 py-12 self-stretch">
                <Input type={'text'} placeholder={'user name'}/>
                <Input type={'number'} placeholder={'user age'}/>
                <Input type={'email'} placeholder={'user email'}/>
                <Input type={'password'} placeholder={'user password'}/>
            </div>

            <div className="">
                <button className=" px-8 py-2 bg-gray-800 rounded-sm text-white capitalize">send message</button>
            </div>
        </div>
        
        </>
    )
}