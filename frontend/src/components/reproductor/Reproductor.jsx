import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import VolumeControl from './VolumeControl';

const Reproductor = ({ className, grabaciones, currentIndex, setCurrentIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const [progress, setProgress] = useState(0);      
  const [currentTrack, setCurrentTrack] = useState(null);  
  const audioRef = useRef(new Audio());              
  const [volume, setVolume] = useState(1); 

  useEffect(() => {
    if (grabaciones.length > 0 && currentIndex >= 0 && currentIndex < grabaciones.length) {
      const track = grabaciones[currentIndex];
      setCurrentTrack(track);  
    
      audioRef.current.src = track.src;

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentIndex, grabaciones, isPlaying]); 

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration) {
          setProgress((currentTime / duration) * 100);
        }
      }
    };

    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []); 

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % grabaciones.length);
  };

  const prevTrack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + grabaciones.length) % grabaciones.length);
  };

  return (
    <div className={`${className} flex justify-between items-center
    w-screen mx-auto p-4 
    bg-gray-4 text-white font-alata`}>
      <div className="flex gap-2 items-center w-1/3">
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
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={nextTrack}><SkipForward /></button>
        </div>

        <div className="w-75 bg-gray-2 h-0.5 rounded mt-4">
          <div className="bg-bright-yellow h-0.5 rounded" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="w-1/3 flex justify-end">
        <VolumeControl volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
};

export default Reproductor;

