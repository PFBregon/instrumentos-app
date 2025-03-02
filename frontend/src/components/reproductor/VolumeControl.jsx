import { useState } from "react";
import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from "react-icons/fa";

const VolumeControl = ({ volume, setVolume }) => {
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  // Alternar visibilidad de la barra de volumen
  const toggleVolumeControl = () => {
    setShowVolumeControl((prev) => !prev);
  };

  return (
    <div className="relative flex justify-center ">
      {/* Botón de volumen */}
      <button onClick={toggleVolumeControl} className="w-8 h-8">
        {volume === 0 ? (
          <FaVolumeMute className="text-white w-6 h-6" />
        ) : volume <= 0.5 ? (
          <FaVolumeDown className="text-white w-6 h-6" />
        ) : (
          <FaVolumeUp className="text-white w-6 h-6" />
        )}
      </button>

      {/* Barra de volumen flotante */}
      {showVolumeControl && (
        <div className="flex absolute left-[-133px] bottom-1 p-2 w-32 rounded-lg shadow-lg">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="custom-slider"
            style={{
              background: `linear-gradient(to right, #e7e300 ${volume * 100}%, white ${volume * 100}%)`,
            }}
          />
        </div>
      )}

      {/* Estilos personalizados para el input range */}
      <style jsx>{`
        .custom-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 5px;
          outline: none;
          transition: opacity 0.2s;
          cursor: pointer;
        }

        /* Estilos del thumb (circulito) */
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: #e7e300; /* Amarillo */
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: #facc15; /* Amarillo */
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;
