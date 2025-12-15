import { NavLink } from "react-router";


export default function Li({link}){



    return (
        <>
        <li  className="">
            <NavLink to={link}>
                {link}
            </NavLink>
        </li>
        </>
    )
}