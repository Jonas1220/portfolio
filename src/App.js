import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import detectBrowserLanguage from 'detect-browser-language'
import Donation from './components/Donation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reviews from './components/Reviews';
// https://preview.colorlib.com/#meetme

const LOCAL_STORAGE_LANG='language';

function App() {
    const [lang,setLang]=useState((localStorage.getItem(LOCAL_STORAGE_LANG)==='de'||localStorage.getItem(LOCAL_STORAGE_LANG)==='en')?localStorage.getItem(LOCAL_STORAGE_LANG):(detectBrowserLanguage().substring(0,2)==='de')?'de':'en')
    // const [currentView,setCurrentView]=useState('Home')
    const [isOpen,setIsOpen]=useState(false);
    function handleLangChange(lang) {setLang(lang);}
    // function handleNavChange(nav) {
    //     setCurrentView(nav);
    //     setIsOpen(false);
    // }
    // function renderSwitch(param) {
    //     switch(param) {
    //         case 'Home': return <Home lang={lang} />;
    //         case 'About': return <About lang={lang}/>;
    //         case 'Projects': return <Projects lang={lang}/>;
    //         default:return'page not found';
    //     }
    // }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home lang={lang} setIsOpen={setIsOpen} isOpen={isOpen} handleLangChange={handleLangChange} />} />
                <Route path='/projects' element={<Projects lang={lang} setIsOpen={setIsOpen} isOpen={isOpen} handleLangChange={handleLangChange} />} />
                <Route path='/about' element={<About lang={lang} setIsOpen={setIsOpen} isOpen={isOpen} handleLangChange={handleLangChange} />} />
                <Route path='/reviews' element={<Reviews lang={lang} setIsOpen={setIsOpen} isOpen={isOpen} handleLangChange={handleLangChange} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
