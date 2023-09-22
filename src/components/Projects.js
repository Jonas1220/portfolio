import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import L from "./L.json"
import Navbar from './Navbar'

export default function Projects({lang,handleLangChange}) {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div className="flex flex-col items-center md:pt-5 lg:pt-9 bg-gradient-to-r from-cyan-500 to-indigo-500 h-96">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} />
            <div className="flex flex-col lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
                {Object.keys(L.projects.projectCards).map(project=>{
                    return <ProjectCard key={project} name={project} description={L['projects']['projectCards'][project]} url={L['projects']['projectCards'][project]['url']} lang={lang} />
                })}
            </div>
        </div>
    )
}
