import { createContext, useState, useContext, useEffect, useRef } from "react";
import * as Tone from "tone";
const PianoContext = createContext();
export const PianoProvider = ({ children }) => {
    const [recording, setRecording] = useState(false);
    const [notas, setNotas] = useState([]);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const [startTime, setStartTime] = useState(null);
useEffect(() => {
        if (recording) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 0.1);
            }, 100);
        } else {
            clearInterval(intervalRef.current);
            setTime(0);
        }
        return () => clearInterval(intervalRef.current);
    } , [recording]);
    const startRecording = () => {
        setNotas([]);
        setStartTime(Date.now());
        setRecording(true);
        setTime(0);
    };
    const stopRecording = () => {
        setRecording(false);
    };
    const handleNotePlay = (nota) => {
        setNotas(prevNotas => [...prevNotas, { nota, timestamp: Date.now() }]);
        console.log("🎵 Nota agregada:", { nota, timestamp: Date.now() });
    };
    
    return (
        <PianoContext.Provider
        value={{ recording, startRecording, stopRecording, handleNotePlay, time, notas }}>
            {children}
        </PianoContext.Provider>
    );
};
export const usePiano = () => useContext(PianoContext);









