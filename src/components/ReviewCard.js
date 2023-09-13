import React from 'react'
// import L from "./L.json"
// import {FiShare} from "react-icons/fi";

export default function ReviewCard({name,description,lang}) {
    return (
        <div className="bg-blsue-100 w-full p-5 mbss-4">
            <h3 className="text-2xl mb-2">{name}</h3>
            <p>{description[lang]}</p>
        </div>
    )
}
