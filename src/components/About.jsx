import React, { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="md:flex bg-slate-100 w-full py-10 mt-40 font-poppins">
            <div className="md:py-24 md:pl-28 py-5 px-10 text-center md:text-left">
                <h1 className="text-4xl font-bold">Fahost is the heart of servers</h1>
                <p className="max-w-sm mt-2 text-1xl">With our industry-leading uptime and customer support, you'll have peace of mind knowing your infrastructure is in good hands</p>
            </div>
            <div className="md:py-20 md:pl-32 text-center">
                <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                >
                    <h1 className="text-7xl font-extrabold bg-gradient-to-r mt-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        {counterOn && <CountUp start={0} end={10000} duration={2} delay={0} />} +
                    </h1>
                    <h2 className="text-2xl pt-2 font-semibold max-w-sm">uses fahost for their hosting and servers</h2>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default About;
