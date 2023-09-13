import React from 'react'
import L from "./L.json"
import Navbar from './Navbar'
import ReviewCard from './ReviewCard'

export default function Reviews({lang,setIsOpen,isOpen,handleLangChange}) {
    return (
        <div className="flex flex-col items-center md:pt-5 lg:pt-9 bg-gradient-to-r from-cyan-500 to-indigo-500 h-96">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} />
            <div className="flex flex-col lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
                <h1 className="text-4xl text-slate-800 my-3">{L['reviews']['heading'][lang]}</h1>
                {Object.keys(L.reviews.reviewCards).map(project=>{
                    return <ReviewCard name={project} description={L['reviews']['reviewCards'][project]} lang={lang} />
                })}
            </div>
        </div>
    )
}
