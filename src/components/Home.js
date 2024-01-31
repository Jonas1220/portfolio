import React, { useState } from 'react'
import Btn from './Btn';
import {FaTwitter,FaGithub,FaLinkedinIn,FaPhone,FaRegEnvelope} from "react-icons/fa6";
import L from "./L.json"
import Navbar from './Navbar';


export default function Home({lang,handleLangChange}) {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div className="flex flex-col items-center bg-slate-800 w-full">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} />
            <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3 bg-slate-700 rounded-3xl p-6 shadow-xl shadow-slate-900 max-w-2xl">
                <div className="flex flex-col justify-center items-center w-full mb-5">
                    <p className="text-slate-300 text-sm">{L['welcome'][lang]}</p>
                    <h1 className="text-4xl text-slate-200">Jonas</h1>
                    <p className="text-slate-300 mb-5 text-sm">{L['job'][lang]}</p>
                    <img className='rounded-3xl w-full max-w-lg' src={require("../img/jk.jpg")} alt="Logo"/>
                </div>
                <div className="w-full p-2 slg:p-10">
                    <hr className=''/>
                    <div className="flex justify-around my-4 mx-2">
                        <Btn icon={<FaTwitter className="text-xl"/>} url={'https://twitter.com/jonaskaatz'} />
                        {/* <Btn icon={'𝕏'} size={true} url={'https://x.com/jonaskaatz'} /> */}
                        <Btn icon={<FaGithub className="text-xl"/>} url={'https://github.com/Jonas1220'} />
                        <Btn icon={<FaLinkedinIn className="text-xl"/>} url={'https://www.linkedin.com/in/jonaskaatz/'} />
                        <Btn icon={<FaRegEnvelope className="text-xl"/>} url={'mailto:hi@jonaskaatz.com'} />
                        <Btn icon={<FaPhone className="text-xl"/>} url={'tel:+4915221994132'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
