import React from 'react'
import image from '../img/jk.jpg';
import Btn from './Btn';
import {FaTwitter,FaGithub,FaLinkedinIn} from "react-icons/fa6";
import {PiEnvelopeSimple,PiPhone} from "react-icons/pi";
import L from "./L.json"

export default function Home({lang}) {
    return (
        <div className="flex flex-col lg:flex-row lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 lg:w-2/5 mb-5">
                <img className='rounded-3xl w-96' src={image} alt="Logo"/>
            </div>
            <div className="w-full lg:w-1/2 lg:w-3/5 p-5 lg:p-10">
                <p className="text-slate-400">{L['welcome'][lang]}</p>
                <h1 className="text-4xl text-slate-800 my-3">JONAS KAATZ</h1>
                <p className="text-slate-400 mb-5">SOFTWARE DEVELOPER</p>
                <hr className='my-4'/>
                <a href="mailto:hi@jonaskaatz.com" className="flex items-center text-slate-400 mx-2 mb-5"><PiEnvelopeSimple className="text-xl text-indigo-500 mr-1"/>hi@jonaskaatz.com</a>
                <a href="tel:+4915221994132" className="flex items-center text-slate-400 mx-2 mb-5"><PiPhone className="text-xl text-indigo-500 mr-1"/>+49 15221994132</a>
                <div className="flex my-4 mx-2">
                    <Btn icon={<FaTwitter className="text-xl"/>} url={'https://twitter.com/jonaskaatz'} />
                    {/* <Btn icon={'𝕏'} size={true} url={'https://x.com/jonaskaatz'} /> */}
                    <Btn icon={<FaGithub className="text-xl"/>} url={'https://github.com/Jonas1220'} />
                    <Btn icon={<FaLinkedinIn className="text-xl"/>} url={'https://www.linkedin.com/in/jonaskaatz/'} />
                </div>
            </div>
        </div>
    )
}
