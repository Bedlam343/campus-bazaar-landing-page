import type { FormEvent } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

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

const Newsletter = () => {
    const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Thank you for signing up! We'll keep you updated.", {
            duration: 4000,
            position: "bottom-center",
        });
        e.currentTarget.reset();
    };

    return (
        <div className="px-6 md:px-0">
            <motion.p
                {...fadeInMotionProps}
                className="text-center text-4xl font-kellySlab 
                text-gray-200 select-none"
            >
                Stay in the Loop
            </motion.p>
            <motion.p
                {...fadeInMotionProps}
                className="text-center text-base md:text-lg font-roboto text-gray-400
                    mt-4 select-none"
            >
                Get notified when Campus Bazaar launches at your university!
            </motion.p>

            <div className="flex justify-center mt-8 w-full">
                <form
                    onSubmit={handleNewsletterSubmit}
                    className="w-full flex justify-center gap-4 items-center"
                >
                    <motion.input
                        {...growRightMotionProps}
                        required
                        type="email"
                        placeholder="Your campus email address"
                        className="h-[45px] md:h-[50px] border-[1px] border-gray-800
                        rounded-3xl w-[90%] max-w-[500px] placeholder-gray-500
                        px-4 font-roboto placeholder:italic outline-none text-gray-300
                        hover:border-orange-400 transition-colors duration-300
                        focus:border-orange-400"
                    />
                    <motion.button
                        {...fadeInMotionProps}
                        type="submit"
                        className="px-6 bg-gray-700/50 rounded-3xl
                        text-gray-200 cursor-pointer overflow-hidden
                        shine-effect relative hover:bg-gray-800/50 text-sm md:text-base
                        min-w-[100px] md:min-w-[120px] h-[40px] md:h-[45px]"
                    >
                        Sign Up
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
