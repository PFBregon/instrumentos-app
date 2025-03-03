import { useState } from "react";
import Reproductor from "../components/reproductor/Reproductor";
import musicIcon from "../assets/img/reproductor/music-icon.svg";
import HomeIcon from "../components/homeicon";
const Grabaciones = () => {
    const grabaciones = [
        {
            title: "Canción 1",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            img: musicIcon
        },
        {
            title: "Canción 2",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            img: musicIcon
        },
        {
            title: "Canción 3",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            img: musicIcon
        },
        {
            title: "Canción 4",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            img: musicIcon
        },
        {
            title: "Canción 5",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            img: musicIcon
        },
        {
            title: "Canción 6",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            img: musicIcon
        },
        {
            title: "Canción 7",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            img: musicIcon
        },
        {
            title: "Canción 8",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            img: musicIcon
        },
        {
            title: "Canción 9",
            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            img: musicIcon
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen relative">
                <div>
                </div>
                <div className="relative z-10
                flex flex-col items-center justify-center h-screen">
                    <HomeIcon />
                    <Reproductor className="mt-auto" grabaciones={grabaciones} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                </div>
            </div>
        </>
    )
}
export default Grabaciones;