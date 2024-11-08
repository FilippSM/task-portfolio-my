import './App.css';
import styled from 'styled-components';
import { Header } from './layuot/header/Header';
import { Main } from './layuot/section/main/Main';
import { Skills } from './layuot/section/skills/Skills';
import { Works } from './layuot/section/works/Works';
import { Contact } from './layuot/section/contacts/Contacts';
import { Footer } from './layuot/section/Footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;