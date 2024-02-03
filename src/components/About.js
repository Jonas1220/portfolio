import React, { useState } from 'react'
import L from "./L.json"
import Navbar from './Navbar'

export default function About({lang,handleLangChange}) {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div className="flex flex-col items-center bg-slate-800 w-full">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} />
            <div className="flex flex-col w-11/12 md:w-3/4 lg:w-2/3 bg-slate-700 rounded-3xl p-6 shadow-xl shadow-slate-900 max-w-2xl">
                <div className="w-full p-5 lg:p-10">
                    <h1 className="text-4xl my-3">{L['about'][lang]}</h1>
                    {L['text'][lang].map((element,key)=>{return <p className="my-3" key={key}>{element}</p>})}
                    <hr className='my-4'/>
                    {/* {Object.keys(L['skills'][lang]).map((key)=>{return <div key={key} className='flex flex-col lg:flex-row mb-4 justify-between text-slate-600'><p className="font-bold">{key}</p><p>{L['skills'][lang][key]}</p></div>})} */}
                </div>
            </div>
        </div>
    )
}
