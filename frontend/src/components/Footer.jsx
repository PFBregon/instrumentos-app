import Copy from '../assets/img/copy.svg';
import GitHub from '../assets/img/github.svg';

const Footer = () => {
    return(
        <footer className='flex justify-between items-center p-9 h-32
        bg-black'>
            <div className='flex items-center gap-1
            text-white font-advent-pro'>
            <p>bugNbass</p>
            <img src={Copy} alt='copy' className='w-3 h-3'/>
            <p>2025</p>
            </div>
    
            <a href="https://github.com/emmalanza/instrumentos-app" target="_blank" rel="noopener noreferrer"
            className='transform transition duration-300 ease-in-out hover:scale-110'>
                <img src={GitHub} alt="GitHub" className='w-12 h-10' />
            </a>
        </footer>
    );
}

export default Footer;