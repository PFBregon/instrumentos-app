import { Link } from 'react-router-dom';

const ListaInstrumentos = ({ instrumentos }) => {
    return (
        <div className='flex flex-col items-center justify-center py-32 gap-10'>
            <h2 className='text-4xl font-anton-sc text-white text-center tracking-wide'>
                ¡Elige tu instrumento!
            </h2>
            <ul className="grid grid-cols-2 gap-14 max-w-[800px]">
                {instrumentos.map((instrumento) => (
                    !instrumento.available  ? (
                        <li key={instrumento.id} className="relative flex flex-col justify-center items-center bg-gray-1 opacity-30 w-40 h-40 rounded-full">
                            <img src={instrumento.img} alt={instrumento.name} className="w-50 h-50" />
                            <span className="absolute bottom-0 text-5xl text-white font-anton-sc tracking-wide drop-shadow-lg">
                                {instrumento.name}
                            </span>
                            <span className="absolute bottom-10 transform rotate-[-8deg] text-4xl text-dark-pink font-anton-sc tracking-wide">
                                Proximamente
                            </span>
                        </li>
                    ) : (
                        <li key={instrumento.id} className='transform transition duration-300 ease-in-out hover:scale-110'>
                            <Link to={`/${instrumento.name}`} className="relative flex flex-col justify-center items-center bg-gray-2 w-40 h-40 rounded-full">
                                <img src={instrumento.img} alt={instrumento.name} className="w-50 h-50" />
                                <span className="absolute bottom-0 text-5xl text-white font-anton-sc tracking-wide drop-shadow-2xl">
                                    {instrumento.name}
                                </span>
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default ListaInstrumentos;
