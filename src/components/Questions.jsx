const Questions = () => {
    return (
        <div className="flex flex-col items-center justify-center font-poppins pt-20 p-4">
            <h1 className="text-center font-bold text-4xl mb-4">Have questions or need solutions?</h1>
            <form className="w-full max-w-md space-y-4 p-10 rounded-lg shadow-xl">
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Fathurahman"
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Fathurahman@gmail.com"
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="w-full p-2 border border-gray-300 rounded-lg" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full p-2 bg-blue-950 text-white rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Questions;
