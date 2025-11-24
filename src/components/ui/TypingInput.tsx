import {
    animate,
    useInView,
    type AnimationPlaybackControlsWithThen,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const inputs = [
    "Find a used MacBook under $800",
    "Find calculus book required for Math 101",
    "Who's selling dorm furniture on campus?",
    "Find affordable bikes near UCLA",
    "Looking for a used iPhone 12 or 13",
];

type TypingInputProps = {
    startAnimation?: boolean;
};

const TypingInput = ({ startAnimation }: TypingInputProps) => {
    const [text, setText] = useState<string>("");
    const [inputIndex, setInputIndex] = useState<number>(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        if (!startAnimation || !isInView) return;

        let controls: AnimationPlaybackControlsWithThen;
        let isMounted = true;
        const currentInput = inputs[inputIndex];

        const typeText = async () => {
            controls = animate(0, currentInput.length, {
                duration: 2,
                ease: "linear",
                onUpdate: (latest) => {
                    if (!isMounted) return;

                    setText(currentInput.slice(0, Math.floor(latest)));
                },
            });

            await controls.finished;
            if (!isMounted) return;

            await new Promise((resolve) => setTimeout(resolve, 1500));
            if (!isMounted) return;

            // delete the text
            controls = animate(currentInput.length, 0, {
                duration: 1,
                ease: "linear",
                onUpdate: (latest) => {
                    if (!isMounted) return;
                    setText(currentInput.slice(0, Math.round(latest)));
                },
            });

            await controls.finished;
            if (!isMounted) return;

            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (!isMounted) return;

            // move to next input
            setInputIndex((prevIndex) => (prevIndex + 1) % inputs.length);
        };

        typeText();

        return () => {
            isMounted = false;
            controls?.stop();
        };
    }, [inputIndex, isInView, startAnimation]);

    return (
        <div
            className="relative w-[350px] sm:w-[500px] md:w-[700px]
             rounded-lg px-4 border-[1.5px] border-gray-700 h-[70px]
             hover:border-[#FEB519] transition-colors flex items-center"
            ref={containerRef}
        >
            <span
                className="outline-none text-gray-200
                border-r-[2px] border-gray-200 inline-block bg-transparent
                w-min-[2px] animate-border-blink cursor-default select-none
                text-sm sm:text-lg md:text-xl font-roboto
                h-[20px] sm:h-[25px] md:h-[30px] mt-[3px] md:mt-[9px]"
            >
                {text}
            </span>

            <img
                src="/icons/search_gray300.svg"
                className="absolute right-5 top-1/2 -translate-y-1/2
                md:w-[50px] w-[30px] sm:w-[40px]"
                loading="lazy"
            />
        </div>
    );
};

export default TypingInput;
