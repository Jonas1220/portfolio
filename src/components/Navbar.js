// import {React} from 'react'
import {React} from 'react'
import {LuMenu} from "react-icons/lu";
import NavMenu from './NavMenu';
// import L from "./L.json"

export default function Navbar({lang,handleLangChange,isOpen,setIsOpen}) {
    return (
        <nav className="flex flex-col items-center w-full">
            <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-between h-16 px-4 max-w-7xl">
                {/* <span className="text-white font-bold text-xl">{L['welcomeNav'][lang]}</span> */}
                <div className="flex-row items-center justify-center hidden md:flex py-2 w-full">
                    <NavMenu lang={lang} handleLangChange={handleLangChange} />
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} type="button" className="md:hidden text-white "><LuMenu/></button>
            </div>
            {isOpen&&(<NavMenu lang={lang} handleLangChange={handleLangChange} />)}
        </nav>
    )
}
