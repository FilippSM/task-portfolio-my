import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Contact } from './layout/section/contacts/Contacts';
import { Footer } from './layout/Footer/Footer';
import { GoTopBtn } from './components/goTopBtn/goTopBtn';



function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;