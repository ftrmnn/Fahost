import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ['business', 'company', 'person','enterprise', 'startup'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 60,
    });

    return (
        <div className="items-center text-center mt-12 font-poppins">
            <h2 className="md:text-7xl text-2xl font-bold">Your Cloud, Your Power</h2>
            <h1 className="font-extrabold md:text-[170px] text-[50px] bg-gradient-to-r mt-1bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                for{' '}
                <span className="bg-gradient-to-rbg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    {typeEffect}
                    <Cursor />
                </span>
            </h1>
            <p className="text-center md:text-lg text-base max-w-xl mx-auto mt-2">Fahost, secure, and reliable cloud solutions tailored for businesses of all sizes, ensuring growth, security, and uptime</p>
            <div className="mt-10">
                <button className="mr-8 bg-slate-300 rounded-3xl px-6 py-3 border-2 border-slate-500">Get Started</button>
                <button className="bg-slate-300 rounded-3xl px-6 py-3 border-2 border-slate-500">Explore Web</button>
            </div>
        </div>
    );
};

export default Home;
