import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import L from "./L.json"
import Navbar from './Navbar'

export default function Projects({lang,handleLangChange}) {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} />
            {Object.keys(L.projects.projectCards).map(project=>{
                return <ProjectCard key={project} name={project} description={L['projects']['projectCards'][project]} url={L['projects']['projectCards'][project]['url']} lang={lang} img={L['projects']['projectCards'][project]['img']} />
            })}
        </div>
    )
}
