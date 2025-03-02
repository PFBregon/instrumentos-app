import Cronometro from "./Cronometro";
import recordButton from "/src/assets/img/instrumento/recordButton.svg";
import { usePiano } from "./PianoContext";
import * as Tone from "tone";


const Grabacion = () => {
  const { recording, startRecording, stopRecording, handleNotePlay, notas } = usePiano();

   const enviarGrabacion = async () => {
      if (!Array.isArray(notas) || notas.length == 0) return;

       const confirmar = window.confirm("¿Quieres guardar la grabación?");
    if (!confirmar) {
      console.log("Grabación descartada por el usuario.");
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
  const manejarDetenerGrabacion = () => {
        stopRecording();
        enviarGrabacion();
    };

  return (
      <div>
        <Cronometro recording={recording} />
        <p style={{ color: recording ? "red" : "black" }}>
            {recording ? "Grabando..." : "No está grabando"}
        </p>
      <button onClick={startRecording} disabled={recording}>
        <img src={recordButton} alt="Grabar" />
      </button>

      <button onClick={stopRecording} disabled={!recording}>
        detener 
      </button>
    </div>
  );
};

export default Grabacion;