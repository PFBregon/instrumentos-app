import Cronometro from "./Cronometro";
import recordButton from "/src/assets/img/instrumento/rec.png";
import stopButton from "/src/assets/img/instrumento/stop.png";
import ecualizador from "/src/assets/img/instrumento/ecualizador.svg";
import luzGris from "/src/assets/img/instrumento/luzGris.png";
import luzRoja from "/src/assets/img/instrumento/luzRoja.png";
import { usePiano } from "./PianoContext";
import * as Tone from "tone";
const Grabacion = () => {
  const { recording, startRecording, stopRecording, handleNotePlay, notas } = usePiano();
   const enviarGrabacion = async () => {
      if (!Array.isArray(notas) || notas.length == 0) return;
       const confirmar = window.confirm("¿Quieres guardar la grabación?");
    if (!confirmar) {
      console.log("Grabaciones descartadas por el usuario.");
      return;
    }
      try{
        const grabacion = {
          notas: notas.map(nota => ({
            nota: nota.nota,
            timestamp: nota.timestamp
        }))
        };
      await fetch("http://localhost:8080/grabacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(grabacion),
    });
    console.log("Grabación enviada al backend");
      } catch (error) {
        console.error("Error al enviar la grabación:", error);
        alert("Hubo un error al enviar la grabación");
    }
    console.log("Grabación:", grabacion);
  };
 /*  const manejarDetenerGrabacion = () => {
        stopRecording();
        enviarGrabacion();
    }; */
    return (
      <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3 m-10">
      <div className="w-46 text-center  bg-[#181818] p-5 rounded-2xl"><Cronometro recording={recording} /></div>
        <img
            src={recording ? "/src/assets/img/instrumento/luzRoja.png" : "/src/assets/img/instrumento/luzGris.png"}
            alt={recording ? "Grabando" : "No está grabando"}
            className="w-20 h-20 object-contain inline-block" />
        </div>
      <div>
            <img src={ecualizador} alt="Ecualizador" className="size-45" />
      </div>
      <div className="flex items-center size-50 mr-8">
      <button onClick={startRecording} disabled={recording}>
        <img src={recordButton} alt="Grabar" />
      </button>
      <button onClick={stopRecording} disabled={!recording} >
        <img src={stopButton} alt="Detener" />
      </button>
      </div>
    </div>
  );
};
export default Grabacion;
