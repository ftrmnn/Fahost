import React from 'react';
import { FaServer, FaCloud, FaDesktop, FaUsersCog, FaExchangeAlt } from 'react-icons/fa';

const Core = () => {
    const coreData = [
        {
            icon: <FaServer />,
            title: "Dedicated Solutions",
            text: "Dedicated servers for high performance and control",
            button: "Learn More >",
        },
        {
            icon: <FaCloud />,
            title: "Cloud Hosting",
            text: "Flexible hosting with scalable, adjustable resources",
            button: "Learn More >",
        },
        {
            icon: <FaDesktop />,
            title: "Managed VPS",
            text: "VPS with complete management and expert support",
            button: "Learn More >",
        },
        {
            icon: <FaUsersCog />,
            title: "Shared Plans",
            text: "Afforrdable hosting for small to medium websites",
            button: "Learn More >",
        },
        {
            icon: <FaExchangeAlt />,
            title: "Reseller Hosting",
            text: "Platform designed to hosting services efficiently to clients and businesses",
            button: "Learn More >",
        },
    ];

    return (
        <div className="flex flex-col mt-24 font-poppins items-center justify-center">
            <h1 className="text-3xl font-bold">Our Core Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4  p-6">
                {coreData.map((data, index) => (
                    <div key={index} className="md:w-96 w-auto p-6 bg-slate-100 shadow-lg rounded-lg flex flex-col ">
                        <div className="text-4xl mb-4 text-blue-500">
                            {data.icon}
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                        <p className="text-gray-700 mb-4">{data.text}</p>
                        <div className="text-left">
                            <button className="text-blue-500 items-start">
                            {data.button} 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Core;
