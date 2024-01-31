import React from 'react'
import L from "./L.json"

export default function Donation({lang}) {
    return (
        <div className="flex justify-center py-s2 mt-5 fixed bottom-2 right-2">
            {lang==='de'?
                <a href="https://donate.stripe.com/cN2bKk6Tn6Mg2hW3cf" rel="noreferrer" target='_blank' className="px-4 py-2 hover:scale-125 ease-in-out duration-200 delay-75 text-sm text-center bg-indigo-600 rounded-lg text-white">{L['support'][lang]} 🙌</a>
            :
                <a href="https://donate.stripe.com/dR66q0b9D3A4g8MfZ0" rel="noreferrer" target='_blank' className="px-4 py-2 hover:scale-125 ease-in-out duration-200 delay-75 text-sm text-center bg-indigo-600 rounded-lg text-white">{L['support'][lang]} 🙌</a>
            }
        </div>
    )
}
