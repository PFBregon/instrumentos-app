import Grabacion from "../components/piano/Grabacion";
import ComponentePiano from "../components/piano/Piano";
import { PianoProvider } from '../components/piano/PianoContext';
import * as Tone from "tone";
import HomeIcon from "../components/homeicon";
import Footer from "../components/footer";
import LinkGrabaciones from "../components/LinkGrabaciones";


const Piano = () => {

    return (
    <div>
        <HomeIcon />
        <LinkGrabaciones />
        <PianoProvider>
        <div>
            <ComponentePiano />
        </div> 
        </PianoProvider>
    </div>
    );
};

export default Piano;