
import Banner from '../assets/img/banner.svg';

const BannerSection = () => {
    return (
        <section className='relative shadow-black shadow-2xl'>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                tracking-wider leading-15 drop-shadow-lg
                text-5xl first-letter:text-6xl font-anton-sc font-extrabold text-bright-yellow text-center uppercase
                max-w-xl">
                    ¡Aprende a tocar música a tu ritmo!</h1>
                <img src={Banner} alt="Banner"
                    className='w-full h-full p-0 m-0' />
        </section>
    );
}

export default BannerSection;