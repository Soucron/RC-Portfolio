import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './portfolio/Projects';
import Remote from './remote/Remote';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

const  App = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
}

export default App;
