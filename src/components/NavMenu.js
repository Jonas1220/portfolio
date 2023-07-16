import React from 'react'
import L from "./L.json"

export default function NavMenu({lang,handleLangChange,handleNavChange}) {
    return (
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto py-2">
            <button onClick={()=>handleNavChange('Home')} className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">Home</button>
            <button onClick={()=>handleNavChange('About')} className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">{L['about'][lang]}</button>
            <button onClick={()=>handleNavChange('Projects')} className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">{L['projects'][lang]}</button>
            {(lang==='de')?<button onClick={()=>handleLangChange('en')} className='md:relative md:top-1 text-3xl'><span className='flag'>{'🇬🇧'}</span></button>:<button onClick={()=>handleLangChange('de')} className='md:relative md:top-1 text-3xl'><span className='flag'>{'🇩🇪'}</span></button>}
        </div>
    )
}
