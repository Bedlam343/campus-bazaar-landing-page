import { useEffect, useRef } from "react";
import { useInView, motion } from "motion/react";

type TitleProps = {
    animate?: boolean;
    onAnimationComplete?: () => void;
    onViewportLeave?: () => void;
    onViewportEnter?: () => void;
};

const Title = ({
    animate = false,
    onAnimationComplete,
    onViewportLeave,
    onViewportEnter,
}: TitleProps) => {
    const mainTitleRef = useRef<HTMLParagraphElement>(null);
    const typingElementRef = useRef<HTMLParagraphElement>(null);

    const mainTitleInView = useInView(mainTitleRef, { margin: "-70px" });

    useEffect(() => {
        if (mainTitleInView) {
            onViewportEnter?.();
        } else {
            onViewportLeave?.();
        }
    }, [mainTitleInView, onViewportEnter, onViewportLeave]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
            }}
            className="flex flex-col items-center w-full"
        >
            <div ref={mainTitleRef} className="flex justify-center">
                <img
                    src="/cb_full_logo_w1920_orange300.png"
                    className="w-[350px] sm:w-[400px] md:w-[500px]"
                />
            </div>

            <div className={`flex justify-center`}>
                <div>
                    <p
                        ref={typingElementRef}
                        className={`text-3xl sm:text-4xl  md:text-5xl font-amatic 
                            text-gray-200 text-center select-none mt-2 font-bold`}
                    >
                        The Ultimate Marketplace for Students
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Title;
