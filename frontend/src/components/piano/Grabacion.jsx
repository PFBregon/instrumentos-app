import Cronometro from "./Cronometro";
import recordButton from "/src/assets/img/instrumento/recordButton.svg";
import { usePiano } from "./PianoContext";
import * as Tone from "tone";
import { useState } from "react";

const Grabacion = () => {
  const { recording, startRecording, stopRecording, notas } = usePiano();
  const [grabaciones, setGrabaciones] = useState([]);

  const enviarGrabaciones = async () => {
    if (!Array.isArray(grabaciones) || grabaciones.length === 0) return;

    const confirmar = window.confirm("¿Quieres guardar todas las grabaciones?");
    if (!confirmar) {
      console.log("Grabaciones descartadas por el usuario.");
      return;
    }

    try {
      await fetch("http://localhost:8080/grabaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grabaciones }),
      });
      console.log("Grabaciones enviadas al backend");
      setGrabaciones([]); // Limpiar después de enviar
    } catch (error) {
      console.error("Error al enviar las grabaciones:", error);
      alert("Hubo un error al enviar las grabaciones");
    }
  };

  const manejarDetenerGrabacion = () => {
    stopRecording();
    if (Array.isArray(notas) && notas.length > 0) {
      setGrabaciones(prev => [...prev, { notas: [...notas] }]);
    }
  };

  console.log("grabaciones", grabaciones);

  return (
    <div>
      <Cronometro recording={recording} />
      <p style={{ color: recording ? "red" : "black" }}>
        {recording ? "Grabando..." : "No está grabando"}
      </p>
      <button onClick={startRecording} disabled={recording}>
        <img src={recordButton} alt="Grabar" />
      </button>

      <button onClick={manejarDetenerGrabacion} disabled={!recording}>
        Detener
      </button>

      <button onClick={enviarGrabaciones} disabled={grabaciones.length === 0}>
        Enviar grabaciones
      </button>
    </div>
  );
};

export default Grabacion;
