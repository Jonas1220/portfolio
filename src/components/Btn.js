import React from 'react'

export default function Btn({url,icon,size}) {
    if (size) {
        return (
            <div className="flex my-4 mr-2">
                <a href={url} target='_blank' rel="noreferrer" className="flex justify-center items-center py-2 hover:scale-125 ease-in-out duration-200 delay-75 w-12 h-12 text-2xl text-center bg-indigo-500 shadow-lg shadow-indigo-300 rounded-lg text-white">{icon}</a>
            </div>
        )
    }
    else {
        return (
            <div className="flex my-4 mr-2">
                <a href={url} target='_blank' rel="noreferrer" className="flex justify-center items-center py-2 hover:scale-125 ease-in-out duration-200 delay-75 w-12 h-12 text-lg text-center bg-indigo-500 shadow-lg shadow-indigo-300 rounded-lg text-white">{icon}</a>
            </div>
        )
    }
}
