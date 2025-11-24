import Marquee from "react-fast-marquee";

const essentials = [
    "/images/wooden_desk_lamp.png",
    "/images/toothbrush_set.png",
    "/images/orange_mini_fan.png",
    "/images/ramen.png",
    "/images/water_bottle.png",
];
const supplies = [
    "/images/textbooks.png",
    "/images/calculator.png",
    "/images/backpack.png",
    "/images/markers.png",
];

const Items = () => {
    return (
        <div className="bg-gray-600 w-full flex justify-center">
            <div
                className="py-12 flex flex-col items-center w-[95%]
                        max-w-[1200px]"
            >
                <p
                    className="text-gray-100 font-kellySlab text-5xl text-center
                        text-shadow-md text-shadow-black select-none"
                >
                    <span className="block">Everything You Need,</span>
                    <span className="block mt-[5px]">All in One Place</span>
                </p>

                <div
                    className="mt-[75px] px-6 py-2 rounded-4xl bg-gray-800/50
                    shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                >
                    <p
                        className="text-gray-300 text-3xl font-amatic 
                    font-bold select-none"
                    >
                        Essentials
                    </p>
                </div>
                <div className="w-[90%] max-w-[700px] overflow-hidden mt-[20px]">
                    <Marquee
                        speed={40}
                        gradient={true}
                        gradientColor="#4a5565"
                        gradientWidth="100px"
                        direction="left"
                        autoFill
                    >
                        {essentials.map((src, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center
                                        mr-[10px] w-[150px]"
                            >
                                <img
                                    src={src}
                                    className="grayscale-100 hover:grayscale-0
                                            duration-300 ease-in-out w-auto h-[150px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div
                    className="mt-[50px] px-6 py-2 rounded-4xl bg-gray-800/50
                    shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                >
                    <p
                        className="text-gray-300 text-3xl font-amatic 
                    font-bold select-none"
                    >
                        Supplies
                    </p>
                </div>
                <div className="w-[90%] max-w-[700px] overflow-hidden mt-[20px]">
                    <Marquee
                        speed={40}
                        gradient={true}
                        gradientColor="#4a5565"
                        gradientWidth="100px"
                        direction="right"
                        autoFill
                    >
                        {supplies.map((src, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center
                                        mr-[10px] w-[150px]"
                            >
                                <img
                                    src={src}
                                    className="grayscale-100 hover:grayscale-0
                                            duration-300 ease-in-out w-auto h-[150px]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Items;
