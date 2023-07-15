import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
// https://preview.colorlib.com/#meetme

// const L = {
//     welcome:{de:'Willkommen, ich bin ',en:'Welcome, I\'m'},
//     text:{de:['Ich bin Software Entwickler aus der Nähe von Frankfurt mit Erfahrungen im Entwickeln von Full Stack Web Applikationen, iOS und Android Apps.','Stand 2023 arbeite ich seit mehr als 10 Jahren im Tech-Industrie. Designen und programmieren sind, seit ich mit dem Arbeiten am Computer angefangen habe, meine große Leidenschaft. Ich liebe es, schön gestaltete, intuitive und funktionale Websites und Apps zu erstellen.','Außerdem interessiere ich mich leidenschaftlich für Krypto, Reisen und das Lernen neuer Dinge.'],en:['I’m a software engineer based near Frankfurt, Germany with experience in building full stack web applications, iOS & android development.','As of 2023 I worked in the tech industry for over ten years. Designing and Coding have been my passion since the day I started working with computers. I love creating beautifully designed, intuitive and functional websites and apps.','Beside that I’m passionate about crypto, travel and exploring new things.']},
//     email:{de:'hi@jonaskaatz.com',en:'hi@jonaskaatz.com'},
//     skills:{de:{Kompetent:'php, javascript, bootstrap, html, css, react, react native, mysql',Erfahrung:'python, expo, git, mongodb',Sonstiges:'Krypto, Kaffee, Reisen'},en:{proficient:'php, javascript, bootstrap, html, css, react, react native, mysql',experience:'python, expo, git, mongodb',other:'crypto, coffee, travel'}},
//     about:{de:'Über mich',en:'About me'},
//     projects:{de:'Projekte',en:'Projects'},
// }


function App() {
    const [lang,setLang]=useState('de')
    const [currentView,setCurrentView]=useState('Home')

    function handleLangChange(lang) {setLang(lang);}
    function handleNavChange(nav) {
        setCurrentView(nav);
    }
    function renderSwitch(param) {
        switch(param) {
            case 'Home':
                return <Home lang={lang}/>;
            case 'About':
                return <About/>;
            case 'Projects':
                return <Projects/>;
            default:
                return 'foo';
        }
    }
    return (
        <div className="h-screen bg-slate-100">
            {/* <p>{currentView}</p> */}
            <div className="flex flex-col items-center md:pt-5 lg:pt-9 bg-gradient-to-r from-cyan-500 to-blue-500 h-2/5">
                <Navbar lang={lang} handleLangChange={handleLangChange} handleNavChange={handleNavChange}/>
                {renderSwitch(currentView)}
            </div>
            {/* <div className="flex lg:flex-row flex-col justify-end items-end h-3/5">
                <div className="flex flex-col items-center w-full lg:w-1/2 bg-red-200">
                    <h1 className="text-2xl">{L['about'][lang]}</h1>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2 bg-blue-200">
                    <h1 className="text-2xl">{L['projects'][lang]}</h1>
                </div>
            </div> */}
        </div>
    );
}

export default App;
