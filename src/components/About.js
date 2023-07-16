import React from 'react'
import L from "./L.json"

export default function About({lang}) {
    return (
        <div className="flex flex-col lg:flex-row lg:mt-28 w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200 max-w-7xl">
           <div className="w-full p-5 lg:p-10">
                {/* <p className="text-slate-400">{L['welcome'][lang]}</p> */}
                <h1 className="text-4xl text-slate-800 my-3">{L['about'][lang]}</h1>
                {/* <p className="text-slate-400 mb-5">SOFTWARE ENGINEER</p> */}
                {L['text'][lang].map((element,key)=>{return <p className="text-slate-600 my-3" key={key}>{element}</p>})}
                <hr className='my-4'/>
                {Object.keys(L['skills'][lang]).map((key)=>{return <div className='flex flex-col lg:flex-row mb-4 justify-between text-slate-600'><p className="font-bold">{key}</p><p>{L['skills'][lang][key]}</p></div>})}
            </div>
        </div>
    )
}
