import { Link } from 'react-router-dom';

const LinkGrabaciones = () => {
    return (
    <div className="absolute top-18 right-18">
        <Link to="/grabaciones" className="text-white font-advent-pro uppercase hover:underline text-2xl">
            Grabaciones
        </Link>
    </div>
    )
}

export default LinkGrabaciones;