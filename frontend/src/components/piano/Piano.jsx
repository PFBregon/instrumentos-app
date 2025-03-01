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

    // Cargar datos del backend
    useEffect(() => {
      const cargarSonidos = async () => {
          try {
              const respuesta = await fetch('http://localhost:8080/piano/notas', {
                  method: 'GET',
                  headers: { 'Accept': 'application/json' },
              });
              if (!respuesta.ok) throw new Error('Error al conectar con el backend');
              const data = await respuesta.json();
              setTeclasPiano(data);
          } catch (error) {
              console.error(error);
          }
      };
      cargarSonidos();
  }, []);

  // Manejar la pulsación de teclas
  const tocarTecla = (event) => {
      const teclaPresionada = event.key.toUpperCase();
      const notaEncontrada = teclasPiano.find((nota) => nota.tecla === teclaPresionada);

      if (notaEncontrada) {
          sintetizador.triggerAttackRelease(notaEncontrada.nombre, "8n");
          setTeclasActivas((prev) => ({ ...prev, [teclaPresionada]: true }));
          handleNotePlay(notaEncontrada);
      }
  };

  // Manejar la liberación de teclas
  const soltarTecla = (event) => {
      const teclaLiberada = event.key.toUpperCase();
      setTeclasActivas((prev) => ({ ...prev, [teclaLiberada]: false }));
  };

  // Agregar y remover event listeners
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
                  <Grabacion />
              </div>

              <div className="flex flex-col items-center p-4 w-full">
                  <div className="relative flex rounded-2xl p-2 bg-black h-[310px]">
                      {teclasPiano.map(({ tecla, nombre }) => (
                          <div
                              key={tecla}
                              className={`tecla ${teclasActivas[tecla] ? 'activada' : ''} 
                                  ${posicionesNegras[tecla] ? 'tecla-negra ' + posicionesNegras[tecla] : 'tecla-blanca'}
                              `}
                          >
                              {tecla}
                          </div>
                      ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                      Usa las teclas A, W, S, E, D, F, T, J, Y, K, U, L, Ñ para tocar el piano
                  </p>
              </div>
          </div>
      </main>
  );
};

export default Piano;