import {useState} from 'react';
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
    function handleLangChange(lang) {setLang(lang);}
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home lang={lang} handleLangChange={handleLangChange} />} />
                <Route path='/projects' element={<Projects lang={lang} handleLangChange={handleLangChange} />} />
                <Route path='/about' element={<About lang={lang} handleLangChange={handleLangChange} />} />
                <Route path='/reviews' element={<Reviews lang={lang} handleLangChange={handleLangChange} />} />
            </Routes>
            <Donation lang={lang}/>
        </BrowserRouter>
    );
}

export default App;
