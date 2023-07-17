import React from 'react'
import L from "./L.json"
import { FiShare } from "react-icons/fi";

export default function ProjectCard({name,description,url,lang}) {
    return (
        <div className="bg-blsue-100 w-full p-5 mbss-4">
            <h3 className="text-2xl mb-2">{name}</h3>
            <p>{description[lang]}</p>
            <a href={url} target='_blank' rel="noreferrer" className="flex justify-center items-center mt-2 py-2 w-24 hover:scale-125 ease-in-out duration-200 delay-75 text-sm text-center bg-indigo-500 shadow-lg shadow-indigo-300 rounded-lg text-white"><FiShare className="text-xl mr-1"/> {L['open'][lang]}</a>
        </div>
    )
}
