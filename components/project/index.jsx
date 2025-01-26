const { default: Card } = require("./card");

export const Project = () => {

    return (
        <section
            className="w-full min-h-[125vh] bg-[#ffffff] font-['Poppins'] p-4 flex flex-col items-center gap-6 "
            id="project"
        >
            {/* Header */}
            <header className="flex items-center justify-center gap-4 mx-4 mt-6">
                <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
                <h2 className="text-2xl font-bold text-center sm:text-4xl">
                    Few of My Projects
                </h2>
                <div className="w-24 sm:w-40 h-1 bg-[#0a0a0a] rounded-full"></div>
            </header>

            <Card/> 
        </section>
    );
};