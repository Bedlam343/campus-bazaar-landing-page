import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const iconTypes = [{ component: Heart, color: "text-orange-400" }];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const FloatingIcons = ({ numIcons = 50 }) => {
    // Generate icon configurations, memoized to prevent re-calculation
    const iconsConfig = useMemo(() => {
        return Array.from({ length: numIcons }).map(() => {
            const type = iconTypes[Math.floor(random(0, iconTypes.length))];
            return {
                IconComponent: type.component,
                color: type.color,
                size: random(1.5, 4),
                left: random(0, 100),
                duration: random(10, 20),
                delay: random(0, 15),
                swayDuration: random(2, 4),
                swayAmplitude: random(20, 60),
            };
        });
    }, [numIcons]);

    return (
        <div
            className="absolute h-full w-full inset-0 z-0 overflow-hidden
            "
            aria-hidden="true"
        >
            {iconsConfig.map((config, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${config.color}`}
                    style={{
                        left: `${config.left}%`,
                        fontSize: `${config.size}rem`,
                    }}
                    animate={{
                        top: ["110%", "-10%"],
                    }}
                    transition={{
                        top: {
                            duration: config.duration,
                            delay: config.delay,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    }}
                >
                    <config.IconComponent fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
};
export default FloatingIcons;
