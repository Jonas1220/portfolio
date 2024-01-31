import React from 'react'

export default function ReviewCard({name,description,lang}) {
    return (
        <div className="flex flex-row flex-wrap mb-8 w-11/12 md:w-3/4 lg:w-2/3 max-w-2xl">
            <div className='flex flex-col items-center bg-slate-700 rounded-3xl p-5 h-full shadow-xl shadow-slate-900'>
                <h3 className="text-2xl mb-2">{name}</h3>
                <p>{description[lang]}</p>
            </div>
        </div>
    )
}
