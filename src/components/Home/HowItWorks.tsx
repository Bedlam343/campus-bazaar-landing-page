import { motion } from "motion/react";
import { LucideRedo, LucideUndo } from "lucide-react";

const fadeInMotionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.2 },
};

const HowItWorks = () => {
    return (
        <div className="bg-gray-950 w-full relative overflow-hidden">
            <div className="lg:pb-15">
                <motion.p
                    {...fadeInMotionProps}
                    style={{ zIndex: 5 }}
                    className="text-4xl text-gray-200 font-kellySlab 
                            text-center select-none"
                >
                    How It Works
                </motion.p>

                <div
                    className="flex flex-col lg:flex-row items-center 
                    lg:justify-center gap-[25px] mt-[75px] lg:gap-[50px]
                    relative"
                >
                    <motion.div
                        {...fadeInMotionProps}
                        className="border-[2px] border-gray-800 rounded-lg
                        h-[400px] w-[300px] sm:w-[350px] lg:w-[300px] p-4 flex flex-col justify-between
                        lg:-rotate-6 lg:translate-y-[20px] bg-gray-800/50
                        shine-effect relative overflow-hidden hover:bg-gray-800/75"
                    >
                        <div>
                            <p className="text-4xl font-amatic text-gray-300">
                                01
                            </p>
                            <div className="flex justify-center mt-[20px]">
                                <img
                                    src="/icons/mail_orange_yellow_gradient.png"
                                    className="h-[150px]"
                                />
                            </div>
                        </div>

                        <p
                            className="text-4xl text-gray-300
                            mt-[10px] font-amatic font-bold"
                        >
                            Sign up with your campus email
                        </p>
                    </motion.div>

                    <LucideRedo
                        className="absolute top-0 text-gray-400 translate-x-[-190px]
                        translate-y-[-75px] hidden lg:block"
                        size={100}
                        strokeWidth={0.5}
                    />

                    <motion.div
                        {...fadeInMotionProps}
                        className="border-[2px] border-gray-800 rounded-lg
                        h-[400px] w-[300px] sm:w-[350px] lg:w-[300px] p-4 flex flex-col justify-between
                        bg-gray-800/50 shine-effect relative overflow-hidden hover:bg-gray-800/75"
                    >
                        <div>
                            <p className="text-4xl font-amatic text-gray-300">
                                02
                            </p>
                            <div className="flex justify-center mt-[20px]">
                                <img
                                    src="/icons/list_orange_yellow_gradient.png "
                                    className="h-[150px]"
                                />
                            </div>
                        </div>

                        <p
                            className="text-4xl text-gray-300
                            mt-[10px] font-amatic font-bold"
                        >
                            List or browse items
                        </p>
                    </motion.div>

                    <LucideUndo
                        className="absolute top-0 text-gray-400 translate-x-[180px]
                        translate-y-[380px] rotate-180 hidden lg:block"
                        size={100}
                        strokeWidth={0.5}
                    />

                    <motion.div
                        {...fadeInMotionProps}
                        className="border-[2px] border-gray-800 rounded-lg
                        h-[400px] w-[300px] sm:w-[350px] lg:w-[300px] p-4 flex flex-col justify-between
                        lg:rotate-6 lg:translate-y-[20px] bg-gray-800/50
                        shine-effect relative overflow-hidden hover:bg-gray-800/75"
                    >
                        <div>
                            <p className="text-4xl font-amatic text-gray-300">
                                03
                            </p>
                            <div className="flex justify-center mt-[20px]">
                                <img
                                    src="/icons/handshake_orange_yellow_gradient.png"
                                    className="h-[150px]"
                                />
                            </div>
                        </div>
                        <p
                            className="text-4xl text-gray-300
                            mt-[10px] font-amatic font-bold"
                        >
                            Meet up and trade safely
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
