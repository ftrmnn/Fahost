import { FaCheckCircle } from "react-icons/fa"; 

const Pricing = () => {
    const pricingData = [
        {
            header: "Personal",
            price: "$5",
            text1: "1 project",
            text2: "Analytics",
            text3: "Insights Panel",
            text4: "Share Features",
            text5: "Basic Support",
            text6: "Email Notifications",
            text7: "Community Access",
            text8: "Weekly Reports",
        },
        {
            header: "Professional",
            price: "$10",
            text1: "2 projects",
            text2: "Analytics",
            text3: "Insights Panel",
            text4: "Share Features",
            text5: "Priority Support",
            text6: "Advanced Reporting",
            text7: "Custom Integrations",
            text8: "Unlimited File Storage",
        },
        {
            header: "Business",
            price: "$50",
            text1: "Unlimited Projects",
            text2: "Analytics",
            text3: "Insights Panel",
            text4: "Share Features",
            text5: "Dedicated Account Manager",
            text6: "24/7 Support",
            text7: "Enterprise-grade Security",
            text8: "Customizable Dashboard",
        },
    ];

    return (
        <div className="font-poppins flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Choose a plan that fits your needs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingData.map((data, index) => (
                    <div key={index} className="md:w-80 w-full p-6 bg-white shadow-lg rounded-lg flex flex-col">
                        <h2 className=" mb-4">{data.header}</h2>
                        <div className="flex items-baseline mb-4">
                            <h1 className="text-4xl font-bold">{data.price}</h1>
                            <p className="pl-2 text-lg text-gray-600">/month</p>
                        </div>
                        {[data.text1, data.text2, data.text3, data.text4, data.text5, data.text6, data.text7, data.text8].map((text, i) => (
                            <div key={i} className="flex items-center mb-2">
                                <FaCheckCircle className="text-green-500" />
                                <h3 className="ml-3">{text}</h3>
                            </div>
                        ))}
                        <div className="pt-5">
                            <button className="py-2 px-4 bg-slate-200 text-black rounded-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
