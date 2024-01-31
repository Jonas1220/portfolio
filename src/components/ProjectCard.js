import React from 'react'
import L from "./L.json"
import {FiShare} from "react-icons/fi";

export default function ProjectCard({name,description,url,lang,img}) {
    return (
        <div className="flex flex-row flex-wrap mb-8 w-11/12 md:w-3/4 lg:w-2/3 max-w-2xl">
            <div className='flex flex-col items-center bg-slate-700 rounded-3xl p-5 h-full shadow-xl shadow-slate-900'>
                <img className='max-w-[100px] mb-2' src={require("../img/"+img+".png")} alt={img+' logo'}/>
                <h3 className="text-center text-2xl mb-2">{name}</h3>
                <p className="text-center">{description[lang]}</p>
                <a href={url} target='_blank' rel="noreferrer" className="flex justify-center items-center mt-2 py-2 w-24 hover:scale-125 ease-in-out duration-200 delay-75 text-sm text-center bg-indigo-600 shadow-lg shadow-indigo-900 rounded-lg text-white"><FiShare className="text-xl mr-1"/> {L['open'][lang]}</a>
            </div>
        </div>
    )
}
