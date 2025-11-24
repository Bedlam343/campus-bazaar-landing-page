import { motion } from "motion/react";
import { useState } from "react";
import TypingInput from "src/components/ui/TypingInput";

const fadeInMotionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.2 },
};

const growRightMotionProps = {
    initial: { scaleX: 0, opacity: 0, transformOrigin: "left" },
    whileInView: { scaleX: 1, opacity: 1, transformOrigin: "left" },
    viewport: { once: true },
    transition: { duration: 0.4, delay: 0.2 },
};

const SmartSearch = () => {
    const [startTyping, setStartTyping] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center px-6 md:px-0">
            <motion.p
                {...fadeInMotionProps}
                className="text-center text-4xl text-gray-100
                        font-kellySlab select-none"
            >
                Campus SmartSearch&trade;
            </motion.p>
            <motion.p
                {...fadeInMotionProps}
                className="font-roboto text-lg md:text-xl italic text-gray-400
                        text-center mt-4 select-none"
            >
                Search like you talk with the power of AI & semantic search
            </motion.p>

            <motion.div
                onAnimationComplete={() => setStartTyping(true)}
                {...growRightMotionProps}
                className="mt-[65px]"
            >
                <TypingInput startAnimation={startTyping} />
            </motion.div>

            <div
                className="flex flex-col items-center mt-[65px]
                        gap-2"
            >
                <motion.p
                    {...fadeInMotionProps}
                    className="text-gray-200 text-3xl font-amatic
                            select-none font-semibold"
                >
                    Powered by OpenAI API
                </motion.p>
                <motion.img
                    {...fadeInMotionProps}
                    src="/icons/openai.png"
                    className="w-[50px] select-none animate-slow-spin"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default SmartSearch;
