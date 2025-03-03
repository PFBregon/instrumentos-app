import { useState } from "react";
import Cronometro from "./Cronometro";
import recordButton from "/src/assets/img/instrumento/rec.png";
import stopButton from "/src/assets/img/instrumento/stop.png";
import ecualizador from "/src/assets/img/instrumento/ecualizador.svg";
import luzGris from "/src/assets/img/instrumento/luzGris.png";
import luzRoja from "/src/assets/img/instrumento/luzRoja.png";
import { usePiano } from "./PianoContext";
import * as Tone from "tone";
import "./modal.css";

const Grabacion = () => {
  const { recording, startRecording, stopRecording, handleNotePlay, notas } = usePiano();
  const [modalVisible, setModalVisible] = useState(false);
  const [onConfirm, setOnConfirm] = useState(null);

  const enviarGrabacion = async () => {
    if (!Array.isArray(notas) || notas.length === 0) return;

    setOnConfirm(() => async () => {
      try {
        const grabacion = {
          notas: notas.map(nota => ({
            nota: nota.nota,
            timestamp: nota.timestamp
          }))
        };

        console.log("✅ Datos enviados al backend:", JSON.stringify(grabacion, null, 2));

        await fetch("http://localhost:8080/grabacion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(grabacion),
        });

        console.log("🚀 Grabación enviada al backend");
      } catch (error) {
        console.error("❌ Error al enviar la grabación:", error);
      }
      setModalVisible(false);
    });
    setModalVisible(true);
  };

  const manejarDetenerGrabacion = () => {
    stopRecording();
    enviarGrabacion();
  };

  return (
    <div className="flex items-center justify-between w-full relative">
      <div className="flex items-center space-x-3 m-10">
        <div className="w-46 text-center bg-[#181818] p-5 rounded-2xl">
          <Cronometro recording={recording} />
        </div>
        <img
          src={recording ? luzRoja : luzGris}
          alt={recording ? "Grabando" : "No está grabando"}
          className="w-20 h-20 object-contain inline-block"
        />
      </div>
      <div>
        <img src={ecualizador} alt="Ecualizador" className="size-45" />
      </div>
      <div className="flex items-center size-50 mr-8">
        <button onClick={startRecording} disabled={recording}>
          <img src={recordButton} alt="Grabar" />
        </button>
        <button onClick={manejarDetenerGrabacion} disabled={!recording}>
          <img src={stopButton} alt="Detener" />
        </button>
      </div>
      
      {modalVisible && (
        <div className="modal-overlay" style={{ zIndex: 1000 }}>
          <div className="modal">
            <h2>¿Quieres guardar la grabación?</h2>
            <div className="modal-buttons">
              <button className="confirm" onClick={onConfirm}>Sí</button>
              <button className="cancel" onClick={() => setModalVisible(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grabacion;
