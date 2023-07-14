import {React} from 'react'
// import {React,useState,useEffect,useRef} from 'react'
// import { LuMenu } from "react-icons/lu";

// Add your navbar links here
// const MENU = [
//     {"name":"Home","link":"#"},
//     {"name":"About","link":"#"},
//     {"name":"Services","link":"#"},
// ]

export default function Navbar({lang,handle}) {
    // const [isOpen, setIsOpen] = useState(false);
    // const navbarRef = useRef(null);

    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if (navbarRef.current && !navbarRef.current.contains(event.target)) {
    //         setIsOpen(false);
    //         }
    //     };
    //     document.addEventListener('click', handleOutsideClick);
    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick);
    //     };
    // }, []);
    return (
        <nav className="flex flex-col items-center w-screen">
            <div className="w-full md:w-3/4 lg:w-2/3 flex items-center justify-between h-16 px-4">
                <span className="text-white font-bold text-xl">Logo</span>
                <div className="">
                    {(lang==='de')?
                    <button onClick={()=>handle('en')} className='text-3xl'><span className='flag'>{'🇬🇧'}</span></button>
                    :
                    <button onClick={()=>handle('de')} className='text-3xl'><span className='flag'>{'🇩🇪'}</span></button>
                    }
                </div>
                {/* <div className="flex flex-row hidden md:block py-2">
                    <a href="#"className="px-4 py-2 text-white ">Home</a>
                    <a href="#"className="px-4 py-2 text-white hover:shadow">About</a>
                    <a href="#" className="px-4 py-2 text-white ">Services</a>
                </div> */}
                {/* <button onClick={() => setIsOpen(!isOpen)} type="button" className="md:hidden text-white "><LuMenu/></button> */}
            </div>

            {/* {isOpen && (
                <div className="flex flex-col w-full md:hidden bg-gray-500 py-2">
                    <a href="#"className=" px-4 py-2 text-white hover:bg-gray-700">Home</a>
                    <a href="#"className=" px-4 py-2 text-white hover:bg-gray-700">About</a>
                    <a href="#" className=" px-4 py-2 text-white hover:bg-gray-700">Services</a>
                </div>
            )} */}
        </nav>
    )
}
