import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import detectBrowserLanguage from 'detect-browser-language'
// https://preview.colorlib.com/#meetme

const LOCAL_STORAGE_LANG='language';

function App() {
    const [lang,setLang] = useState((localStorage.getItem(LOCAL_STORAGE_LANG)==='de'||localStorage.getItem(LOCAL_STORAGE_LANG)==='en')?localStorage.getItem(LOCAL_STORAGE_LANG):(detectBrowserLanguage().substring(0,2)==='de')?'de':'en')
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
                return <About lang={lang}/>;
            case 'Projects':
                return <Projects lang={lang}/>;
            default:
                return 'foo';
        }
    }
    return (
        <div className="h-screen bg-slate-100">
            <div className="flex flex-col items-center md:pt-5 lg:pt-9 bg-gradient-to-r from-cyan-500 to-indigo-500 h-2/5">
                <Navbar lang={lang} handleLangChange={handleLangChange} handleNavChange={handleNavChange}/>
                {renderSwitch(currentView)}
            </div>
        </div>
    );
}

export default App;
