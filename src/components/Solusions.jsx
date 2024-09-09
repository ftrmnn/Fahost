import React from 'react';

const Solusions = () => {
    const solusiData = [
        {
            versi: "version 1.0",
            title: "Scalable Infrastructure",
            text: "Easily adjustable infrastructure for business growth",
            button: "Read More",
            image: "/aset1.png",
        },  
        {
            versi: "version 1.0",
            title: "Scalable Infrastructure",
            text: "Easily adjustable infrastructure for business growth",
            button: "Read More",
            image: "/aset2.png"
        },  
    ];

    return (
        <div className="mt-24 font-poppins flex flex-col items-center">
            <h1 className="font-bold text-3xl mb-6">Our Solutions</h1>
            <div className="mt-4 p-4 flex flex-wrap justify-center gap-4">
                {solusiData.map((data, index) => (
                    <div key={index} className="flex flex-col md:flex-row w-full md:w-[1100px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg overflow-hidden relative">
                        <div className="py-6 md:pl-12 pl-3 flex-1">
                            <h2 className="text-white font-semibold">{data.versi}</h2>
                            <h1 className="text-white mt-4 font-bold text-3xl md:text-5xl">{data.title}</h1>
                            <p className="text-2xl max-w-md text-white">{data.text}</p>
                            <div>
                                <button className="md:mt-10 mt-4 bg-slate-100 py-2 px-4 rounded-2xl">
                                    {data.button}
                                </button>
                            </div>
                        </div>
                        <div className="flex-shrink-0 relative w-30 md:w-80 mb-10 h-[200px]">
                            <img src={data.image} alt={data.title} className="absolute inset-0 w-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solusions;
