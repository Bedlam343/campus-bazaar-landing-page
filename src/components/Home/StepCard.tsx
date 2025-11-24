import { motion } from "motion/react";

type StepCardProps = {
    startAnimation: boolean;
    onComplete?: () => void;
    image: string;
    title: string;
};

const StepCard = ({
    startAnimation,
    onComplete,
    image,
    title,
}: StepCardProps) => {
    return (
        <motion.div
            id="step1-container"
            initial={{ scale: 0, transformOrigin: "top left" }}
            animate={
                startAnimation && {
                    scale: 1,
                    transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        onComplete: () => {
                            onComplete?.();
                        },
                    },
                }
            }
            style={{ zIndex: 0 }}
            className="p-4 flex flex-col justify-center items-center 
                        rounded-lg shadow-md shadow-black w-[300px] h-[200px] gap-4
                        bg-gray-800/50 relative overflow-hidden shine-effect"
        >
            {/* The glint element */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background:
                        "linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)",
                }}
                initial={{ left: "-100%" }}
                animate={
                    startAnimation && {
                        left: "100%",
                    }
                }
                transition={{
                    // 2. Start this animation slightly after the parent's delay
                    delay: 0.8,
                    duration: 1,
                    ease: [0.23, 1, 0.32, 1], // Your cubic-bezier
                }}
            />

            <img src={image} className="w-[75px] relative" />

            <p
                className="text-gray-300 font-roboto
                                text-lg text-center select-none relative"
            >
                {title}
            </p>
        </motion.div>
    );
};

export default StepCard;
