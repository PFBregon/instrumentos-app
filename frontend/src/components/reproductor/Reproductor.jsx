import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import VolumeControl from './VolumeControl';

const Reproductor = ({ className, grabaciones, currentIndex, setCurrentIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);  // Estado para saber si está en reproducción o pausado
  const [progress, setProgress] = useState(0);        // Estado para el progreso del audio
  const [currentTrack, setCurrentTrack] = useState(null);  // Estado para la canción actual
  const audioRef = useRef(new Audio());               // Referencia al objeto Audio
  const [volume, setVolume] = useState(1); 

  // Este useEffect maneja la carga de la canción y el audio al cambiar el currentIndex
  useEffect(() => {
    if (grabaciones.length > 0 && currentIndex >= 0 && currentIndex < grabaciones.length) {
      const track = grabaciones[currentIndex];
      setCurrentTrack(track);  // Actualiza la canción actual

      // Configura el audio con la canción seleccionada
      audioRef.current.src = track.src;


      // Reproducir si está en "play"s
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentIndex, grabaciones, isPlaying]); // Se ejecuta cuando cambia currentIndex o isPlaying

  // Este useEffect actualiza el progreso de la canción
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration) {
          setProgress((currentTime / duration) * 100); // Calcula el progreso
        }
      }
    };

    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateProgress);
    // Cleanup
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []); // Solo se ejecuta una vez al principio

  // Manejo de volumen
  useEffect(() => {
    audioRef.current.volume = volume; // Actualiza el volumen del audio
  }, [volume]);


  // Función para alternar entre "play" y "pause"
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pausa el audio si está en reproducción
    } else {
      audioRef.current.play(); // Reproduce el audio si está pausado
    }
    setIsPlaying(!isPlaying); // Cambia el estado de reproducción
  };

  // Función para cambiar a la siguiente canción
  const nextTrack = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % grabaciones.length);
  };

  // Función para cambiar a la canción anterior
  const prevTrack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + grabaciones.length) % grabaciones.length);
  };

  return (
    <div className={`${className} flex justify-between items-center
    w-screen mx-auto p-4 
    bg-gray-4 text-white font-alata`}>
      <div className="flex gap-2 items-center w-1/3">
        {/* Solo mostrar la canción y su imagen si está seleccionada */}
        {currentTrack && (
          <>
            <img className="w-10 h-10" src={currentTrack.img} alt="Icono de canción" />
            <span className="text-sm">{currentTrack.title}</span>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-1/3">
        <div className="flex items-center gap-8">
          <button onClick={prevTrack}><SkipBack /></button>
          <button onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <Play />}  {/* Cambia el icono según si está en reproducción o pausado */}
          </button>
          <button onClick={nextTrack}><SkipForward /></button>
        </div>

        <div className="w-75 bg-gray-2 h-0.5 rounded mt-4">
          <div className="bg-bright-yellow h-0.5 rounded" style={{ width: `${progress}%` }}></div> {/* Barra de progreso */}
        </div>
      </div>

      <div className="w-1/3 flex justify-end">
        <VolumeControl volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default Reproductor;

