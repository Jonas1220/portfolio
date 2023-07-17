// import {React} from 'react'
import { React, useState } from 'react'
import { LuMenu } from "react-icons/lu";
import NavMenu from './NavMenu';
import L from "./L.json"

export default function Navbar({lang,handleLangChange,handleNavChange,isOpen,setIsOpen}) {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col items-center w-screen">
            <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-between h-16 px-4 max-w-7xl">
                <span className="text-white font-bold text-xl">{L['welcomeNav'][lang]}</span>
                <div className="flex flex-row items-center hidden md:block py-2">
                    <NavMenu lang={lang} handleLangChange={handleLangChange} handleNavChange={handleNavChange}/>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className="md:hidden text-white "><LuMenu/></button>
            </div>
            {isOpen&&(<NavMenu lang={lang} handleLangChange={handleLangChange} handleNavChange={handleNavChange}/>)}
        </nav>
    )
}
