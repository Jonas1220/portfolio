import React from 'react'
import L from "./L.json"
import { FiShare } from "react-icons/fi";

export default function ProjectCard({lang}) {
    return (
        <div className="bg-blue-100 w-full p-5 mb-4">
            <h3 className="text-xl mb-2">Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="url" target='_blank' rel="noreferrer" className="flex justify-center items-center mt-2 py-2 w-20 hover:scale-125 ease-in-out duration-200 delay-75 text-sm text-center bg-indigo-500 shadow-lg shadow-indigo-300 rounded-lg text-white"><FiShare className="text-xl mr-1"/> {L['open'][lang]}</a>

        </div>
    )
}
