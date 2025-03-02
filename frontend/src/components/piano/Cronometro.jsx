import { useState, useEffect, useRef } from 'react';

const Cronometro = ({ recording }) => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        
        if (recording) { 
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 0.1);
            }, 100); 
        } else {
            clearInterval(intervalRef.current); 
            setTime(0); 
        }

        return () => clearInterval(intervalRef.current); 
    }, [recording]); 

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const milliseconds = Math.floor((time * 1000) % 1000);
        return `${minutes.toString().padStart(2, '0')}:` +
               `${seconds.toString().padStart(2, '0')}:` +
               `${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <div>
            ⏱️{formatTime(time)}
        </div>
    );
};

export default Cronometro;