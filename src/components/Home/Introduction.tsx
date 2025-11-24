import { motion } from "motion/react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Title from "src/components/Title";

import backgroundImage from "src/assets/images/campus_bazaar_background_w1920.png";
const clothingImages = import.meta.glob(
    "src/assets/images/carousel/clothing/*.png",
    { eager: true }
);
const suppliesImages = import.meta.glob(
    "src/assets/images/carousel/supplies/*.png",
    { eager: true }
);
const electronicsImages = import.meta.glob(
    "src/assets/images/carousel/electronics/*.png",
    { eager: true }
);

type IntroductionProps = {
    onAnimationsCalled?: () => void;
    onTitleViewportLeave?: () => void;
    onTitleViewportEnter?: () => void;
};

const supplies = Object.values(
    suppliesImages as Record<string, { default: string }>
).map((module) => module.default);

const electronics = Object.values(
    electronicsImages as Record<string, { default: string }>
).map((module) => module.default);
const clothing = Object.values(
    clothingImages as Record<string, { default: string }>
).map((module) => module.default);

const Introduction = ({
    onAnimationsCalled,
    onTitleViewportLeave,
    onTitleViewportEnter,
}: IntroductionProps) => {
    const [animateJoinButton, setAnimateJoinButton] = useState<boolean>(false);

    const handleTitleAnimationComplete = () => {
        setAnimateJoinButton(true);
    };

    return (
        <>
            <div className="relative">
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
                    }}
                    className="absolute inset-0 bg-cover bg-center translate-y-[-300px]"
                />

                <div className="pt-[175px] relative" style={{ zIndex: 10 }}>
                    <Title
                        animate
                        onViewportLeave={onTitleViewportLeave}
                        onViewportEnter={onTitleViewportEnter}
                        onAnimationComplete={handleTitleAnimationComplete}
                    />
                </div>

                <div
                    className="w-full h-[200px] relative bg-gradient-to-b from-transparent
                        to-gray-950 flex justify-center items-center"
                >
                    <motion.button
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: -25 }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100,
                            delay: 1,
                        }}
                        className="px-4 py-1 relative
                            h-[40px] text-gray-800 cursor-pointer
                            bg-[#FEB519] rounded-3xl hover:bg-orange-400
                            transition-colors duration-300 ease-in-out font-semibold"
                    >
                        Join Now!
                    </motion.button>
                </div>

                <div className="relative w-full flex justify-center pt-14 bg-gray-950">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 25,
                            delay: 1.5,
                        }}
                        className="flex flex-col items-center w-[95%]
                        max-w-[1200px]"
                    >
                        <p
                            className="text-gray-200 font-kellySlab text-4xl text-center
                        text-shadow-md text-shadow-black select-none"
                        >
                            <span className="block">Everything You Need,</span>
                            <span className="block mt-[5px]">
                                All in One Place
                            </span>
                        </p>

                        <div
                            className="mt-[40px] px-6 py-2 rounded-4xl bg-gray-800/50
                            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                        >
                            <p
                                className="text-gray-300 text-2xl font-amatic 
                                font-bold select-none"
                            >
                                Clothing & Shoes
                            </p>
                        </div>
                        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
                            <Marquee
                                speed={40}
                                gradient={true}
                                gradientColor="#0c0a09"
                                gradientWidth="100px"
                                direction="left"
                                autoFill
                            >
                                {clothing.map((src, index) => (
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
                            className="mt-[30px] px-6 py-2 rounded-4xl bg-gray-800/50
                            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                        >
                            <p
                                className="text-gray-300 text-2xl font-amatic 
                                font-bold select-none"
                            >
                                Electronics
                            </p>
                        </div>
                        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
                            <Marquee
                                speed={40}
                                gradient={true}
                                gradientColor="#0c0a09"
                                gradientWidth="100px"
                                direction="right"
                                autoFill
                            >
                                {electronics.map((src, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center
                                        mr-[10px] w-auto"
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
                            className="mt-[30px] px-6 py-2 rounded-4xl bg-gray-800/50
                            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                        >
                            <p
                                className="text-gray-300 text-2xl font-amatic 
                                font-bold select-none"
                            >
                                Supplies
                            </p>
                        </div>
                        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
                            <Marquee
                                speed={40}
                                gradient={true}
                                gradientColor="#0c0a09"
                                gradientWidth="100px"
                                direction="left"
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

                        {/* <div
                            className="mt-[50px] px-6 py-2 rounded-4xl bg-gray-800/50
                            shadow-md shadow-black/50 relative shine-effect overflow-hidden"
                        >
                            <p
                                className="text-gray-300 text-2xl font-amatic 
                                font-bold select-none"
                            >
                                Essentials
                            </p>
                        </div>
                        <div className="w-[90%] max-w-[700px] overflow-hidden mt-[15px]">
                            <Marquee
                                speed={40}
                                gradient={true}
                                gradientColor="#0c0a09"
                                gradientWidth="100px"
                                direction="right"
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
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Introduction;
