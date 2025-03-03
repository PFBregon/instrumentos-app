import IconoCasa from "../assets/img/home.svg";
import { Link } from "react-router-dom";

const HomeIcon = () => {
    return (
        <div className="absolute size-[42px] top-15 left-18">
            <Link to="/">
                <img src={IconoCasa} alt="Home Icon" />
            </Link>
        </div>
    );
    };

export default HomeIcon;