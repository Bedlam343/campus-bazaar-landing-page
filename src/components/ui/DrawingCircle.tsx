import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

type DrawingCircleProps = {
    text: string;
    startAnimation?: boolean;
};

const DrawingCircle = ({ text, startAnimation }: DrawingCircleProps) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (startAnimation) {
            animate(
                "#drawing-circle",
                { pathLength: 1 },
                { duration: 0.5, ease: "easeInOut" }
            );

            animate(
                "#drawing-text",
                { opacity: 1, scale: 1 },
                { delay: 0.3, duration: 0.3, ease: "easeOut" }
            );
        } else {
            // (Optional) Instantly reset if you toggle it off
            // animate("#drawing-circle", { pathLength: 0 }, { duration: 0 });
            // animate(
            //     "#drawing-text",
            //     { opacity: 0, scale: 0.8 },
            //     { duration: 0 }
            // );
        }
    }, [startAnimation, animate]);

    return (
        <motion.svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            className="absolute left-[-20px] top-[-20px]"
            ref={scope}
            style={{ zIndex: 5 }}
        >
            <defs>
                <linearGradient
                    id="circleGradient"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#7DCBFF" />
                    <stop offset="100%" stopColor="#2080FF" />
                </linearGradient>
            </defs>

            <motion.g style={{ rotate: -90, transformOrigin: "50% 50%" }}>
                <motion.circle
                    id="drawing-circle" // 5. Give the element a selector (ID)
                    cx="50"
                    cy="50"
                    r="25"
                    fill="transparent"
                    stroke="url(#circleGradient)"
                    strokeWidth="50"
                    initial={{ pathLength: 0 }} // We still use 'initial' for the start state
                />
            </motion.g>

            <motion.text
                className="font-bold font-amatic text-6xl text-gray-950"
                id="drawing-text" // 5. Give the element a selector (ID)
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
                initial={{ opacity: 0, scale: 0.8 }} // We still use 'initial' for the start state
            >
                {text}
            </motion.text>
        </motion.svg>
    );
};

export default DrawingCircle;
