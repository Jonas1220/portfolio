import React from 'react'
import image from './img/jk.jpg';

const L = {
    welcome:{de:'Willkommen, ich bin ',en:'Welcome, I\'m'},
    text:{de:['Ich bin Software Entwickler aus der Nähe von Frankfurt mit Erfahrungen im Entwickeln von Full Stack Web Applikationen, iOS und Android Apps.','Stand 2023 arbeite ich seit mehr als 10 Jahren im Tech-Industrie. Designen und programmieren sind, seit ich mit dem Arbeiten am Computer angefangen habe, meine große Leidenschaft. Ich liebe es, schön gestaltete, intuitive und funktionale Websites und Apps zu erstellen.','Außerdem interessiere ich mich leidenschaftlich für Krypto, Reisen und das Lernen neuer Dinge.'],en:['I’m a software engineer based near Frankfurt, Germany with experience in building full stack web applications, iOS & android development.','As of 2023 I worked in the tech industry for over ten years. Designing and Coding have been my passion since the day I started working with computers. I love creating beautifully designed, intuitive and functional websites and apps.','Beside that I’m passionate about crypto, travel and exploring new things.']},
    email:{de:'hi@jonaskaatz.com',en:'hi@jonaskaatz.com'},
    skills:{de:{Kompetent:'php, javascript, bootstrap, html, css, react, react native, mysql',Erfahrung:'python, expo, git, mongodb',Sonstiges:'Krypto, Kaffee, Reisen'},en:{proficient:'php, javascript, bootstrap, html, css, react, react native, mysql',experience:'python, expo, git, mongodb',other:'crypto, coffee, travel'}},
    about:{de:'Über mich',en:'About me'},
    projects:{de:'Projekte',en:'Projects'},
}

export default function Home({lang}) {
    return (
        <div className="flex flex-col lg:flex-row lg:mt-9 w-11/12 md:w-3/4 lg:w-3/4 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200">
            <div className="flex flex-col justify-center w-full lg:w-1/2 lg:w-2/5">
                <img className='rounded-3xl' src={image} alt="Logo"/>
            </div>
            <div className="w-full lg:w-1/2 lg:w-3/5 p-5 lg:p-10">
                <p className="text-slate-400">{L['welcome'][lang]}</p>
                <h1 className="text-4xl text-slate-800 my-3">JONAS KAATZ</h1>
                <p className="text-slate-400 mb-5">SOFTWARE ENGINEER</p>
                {L['text'][lang].map((element,key)=>{return <p className="text-slate-600 my-2" key={key}>{element}</p>})}
                <hr className='my-4'/>
                {Object.keys(L['skills'][lang]).map((key)=>{return <div className='flex justify-between text-slate-600'><p>{key}</p><p>{L['skills'][lang][key]}</p></div>})}
            </div>
        </div>
    )
}
