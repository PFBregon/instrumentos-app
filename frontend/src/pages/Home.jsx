import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import BannerSection from '../components/BannerSection';
import ListaInstrumentos from '../components/ListaInstrumentos';
import Footer from '../components/footer';
import Guitarra from '../assets/img/guitarra.svg';
import Piano from '../assets/img/piano.svg';

const Home = () => {
    const instrumentos = [
        {
            id: 1,
            name: 'piano',
            available: true,
            img: Piano
        },
        {
            id: 2,
            name: 'guitarra',
            available: false, 
            img: Guitarra
        }
    ]

    return (

        // es lo mismo que envolver los elementos html en <></>
        // ya que react necesita un "contenedor padre" para devolver mas de un elemento html
        <React.Fragment>

            <Header/>
            <BannerSection/>
            <main >
                <ListaInstrumentos instrumentos={instrumentos} />
            </main>
            <Footer/>

           

        </React.Fragment>

    )
}

export default Home;