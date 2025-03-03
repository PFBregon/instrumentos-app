import {useRef, useEffect} from "react";



const ListaGrabaciones = ({ grabaciones, currentIndex, setCurrentIndex }) => {
  const songRefs = useRef([]);

  useEffect(() => {
    songRefs.current.length = grabaciones.length;
  }, [grabaciones.length]);


  useEffect(() => {

    if (songRefs.current[currentIndex]) {
      songRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-2xl h-[700px] overflow-y-auto no-scrollbar m-4 p-4 rounded-md shadow-md shadow-black bg-black text-white flex flex-col items-center gap-4">
      <h2 className="font-anton-sc text-5xl">Grabaciones</h2>
      {grabaciones.map((grabacion, index) => (
        <div
          key={index}
          ref={(el) => { songRefs.current[index] = el }}
          className={`p-2 cursor-pointer border-b-1 ${
            index === currentIndex ? "border-bright-yellow" : "border-gray-2"
          } w-96 transform transition duration-300 ease-in-out hover:scale-105 flex items-center gap-6`}
          onClick={() => setCurrentIndex(index)}
        >
          <img src={grabacion.img} alt="Icono de sonido" />
          <p>{grabacion.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaGrabaciones;

