import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import detectBrowserLanguage from 'detect-browser-language'
import Donation from './components/Donation';
// https://preview.colorlib.com/#meetme

const LOCAL_STORAGE_LANG='language';

function App() {
    const [lang,setLang]=useState((localStorage.getItem(LOCAL_STORAGE_LANG)==='de'||localStorage.getItem(LOCAL_STORAGE_LANG)==='en')?localStorage.getItem(LOCAL_STORAGE_LANG):(detectBrowserLanguage().substring(0,2)==='de')?'de':'en')
    const [currentView,setCurrentView]=useState('Home')
    const [isOpen,setIsOpen]=useState(false);
    function handleLangChange(lang) {setLang(lang);}
    function handleNavChange(nav) {
        setCurrentView(nav);
        setIsOpen(false);
    }
    function renderSwitch(param) {
        switch(param) {
            case 'Home': return <Home lang={lang}/>;
            case 'About': return <About lang={lang}/>;
            case 'Projects': return <Projects lang={lang}/>;
            default:return'page not found';
        }
    }
    return (
        <div className="flex flex-col items-center md:pt-5 lg:pt-9 bg-gradient-to-r from-cyan-500 to-indigo-500 h-96">
            <Navbar setIsOpen={setIsOpen} isOpen={isOpen} lang={lang} handleLangChange={handleLangChange} handleNavChange={handleNavChange}/>
            {renderSwitch(currentView)}
            <Donation lang={lang}/>
        </div>
    );
}

export default App;
