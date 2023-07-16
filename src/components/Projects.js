import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({lang}) {
    return (
        <div className="flex flex-col lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
            <ProjectCard lang={lang} />
            <ProjectCard lang={lang} />
            <ProjectCard lang={lang} />
            <ProjectCard lang={lang} />
        </div>
    )
}
