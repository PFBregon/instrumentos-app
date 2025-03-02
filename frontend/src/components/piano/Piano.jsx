import { useEffect, useState } from "react";
import * as Tone from "tone";
import './piano.css';
import { usePiano } from "./PianoContext";
import Grabacion from "./Grabacion";
import HomeIcon from "../homeicon";
import Footer from "../footer";
import { Link } from "react-router-dom";
import LinkGrabaciones from "../LinkGrabaciones";


const Piano = () => {
    const sintetizador = new Tone.Synth().toDestination();
    const {handleNotePlay} = usePiano();
    const [teclasPiano, setTeclasPiano] = useState([]);

    const teclasBlancas = ["A", "S", "D", "F", "J", "K", "L", "Ñ"];
    const teclasNegras = ["W", "E", "T", "Y", "U"];

    async function getSonidos() {
      const respuesta = await fetch('http://localhost:8080/piano/notas', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });
      if (!respuesta.ok) {
        throw new Error('Error al conectar con el backend');
      }
      return await respuesta.json();
    }

    const posicionesNegras = {
        "W": "left-[72px]", "E": "left-[160px]", "T": "left-[335px]", "Y": "left-[424px]", "U": "left-[511px]"  
    };

    const [teclasActivas, setTeclasActivas] = useState({});

    useEffect(() => {
      const cargar = async () => {
          const data = await getSonidos();
          setTeclasPiano(data);
      };
      cargar();
    }, []);

    const tocarTecla = (event) => {
        const tecla = event.key.toUpperCase();
       const nota= teclasPiano.find((tecla) => tecla.tecla === event.key.toUpperCase());
        if (nota) {
            sintetizador.triggerAttackRelease(nota.nombre, "8n");
            setTeclasActivas((prev) => ({ ...prev, [tecla]: true }));
            handleNotePlay(nota);
        }
    };

    const soltarTecla = (event) => {
        const tecla = event.key.toUpperCase();
        setTeclasActivas((prev) => ({ ...prev, [tecla]: false }));
    };

    useEffect(() => {
        window.addEventListener("keydown", tocarTecla);
        window.addEventListener("keyup", soltarTecla);
        return () => {
            window.removeEventListener("keydown", tocarTecla);
            window.removeEventListener("keyup", soltarTecla);
        };
    }, [teclasPiano]);

  
    return (
      <main className="flex flex-col items-center justify-center h-screen bg-black-opacity">
        <div className="w-[775px] h-[605px] justify-self-center mt-10 rounded-2xl bg-gray-4 shadow-black shadow-2xl">
          
          <div className="w-full h-[181px] bg-gray-4/75 shadow-black shadow-xl rounded-2xl">
           <Grabacion/>
          </div>

          <div className="flex flex-col items-center p-4 w-full">

            <div className="relative flex  rounded-2xl p-2 bg-black h-[310px]">
              {teclasBlancas.map((key, index) => (
                <div
                  key={key}
                  className={`tecla-blanca 
                    ${teclasActivas[key] ? 'activada' : ''} 
                    ${index === 0 ? 'first' : ''}  {/* Clase para la primera tecla */}
                    ${index === teclasBlancas.length - 1 ? 'last' : ''}  {/* Clase para la última tecla */}
                  `}
                >
                  {key}
                </div>
              ))}
              
              {teclasNegras.map((key) => (
                <div
                  key={key}
                  className={`tecla-negra 
                    ${teclasActivas[key] ? 'activada' : ''} ${posicionesNegras[key]} `}  
                >
                  {key}
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-400">Usa las teclas A, W, S, E, D, F, T, J, Y, K, U, L, Ñ para tocar el piano</p>
          </div>
        </div>
        </main>
      );
};

export default Piano;