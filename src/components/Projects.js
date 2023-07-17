import React from 'react'
import ProjectCard from './ProjectCard'
import L from "./L.json"

export default function Projects({lang}) {
    return (
        <div className="flex flex-col lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
            {Object.keys(L.projects.projectCards).map(project=>{
                return <ProjectCard name={project} description={L['projects']['projectCards'][project]} url={L['projects']['projectCards'][project]['url']} lang={lang} />
            })}
        </div>
    )
}
