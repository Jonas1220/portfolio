import React from 'react'
import L from "./L.json"
import { Link } from 'react-router-dom'

export default function NavMenu({lang,handleLangChange}) {
    return (
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto py-2">
            <Link to='/' className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">Start</Link>
            <Link to='/about' className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">{L['about'][lang]}</Link>
            <Link to='/reviews' className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">{L['reviews'][lang]}</Link>
            <Link to='/projects' className="hover:shadow-lg shadow-cyan-200 rounded px-4 py-2 text-white w-5/6 md:w-auto">{L['projects'][lang]}</Link>
            {/* {(lang==='de')?<button onClick={()=>handleLangChange('en')} className='md:relative md:top-1 text-3xl'><span className='flag'>{'🇬🇧'}</span></button>:<button onClick={()=>handleLangChange('de')} className='md:relative md:top-1 text-3xl'><span className='flag'>{'🇩🇪'}</span></button>} */}
        </div>
    )
}
