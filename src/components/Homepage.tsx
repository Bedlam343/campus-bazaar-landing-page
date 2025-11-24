import { motion } from "motion/react";

import Introduction from "src/components/Home/Introduction";
import SmartSearch from "src/components/Home/SmartSearch";
import Testimonials from "src/components/Home/Testimonials";
import HowItWorks from "src/components/Home/HowItWorks";
import Newsletter from "src/components/Home/Newsletter";
import { Explosion } from "src/components/ui/icons";
import { useRef } from "react";

const Home = () => {
    const introductionRef = useRef<HTMLDivElement>(null);
    const worksRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const newsletterRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (
        ref: React.RefObject<HTMLDivElement | null>,
        block: ScrollLogicalPosition = "center"
    ) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block });
        }
    };

    return (
        <div
            style={{ scrollbarGutter: "stable" }}
            className="h-screen overflow-y-scroll bg-gray-950"
        >
            <motion.div
                style={{
                    zIndex: 20,
                }}
                // initial={{ opacity: 0, y: -20 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-center items-center w-full 
                 fixed top-[20px]
                "
            >
                <div
                    className="h-[80px] w-[90%] max-w-[800px] px-8 py-2
                    flex items-center justify-between gap-10 shadow-md
                    shadow-black border-gray-600
                    bg-gray-950/75 backdrop-blur-[4px] rounded-4xl
                    border-[1px]"
                >
                    <button
                        className="cursor-pointer"
                        onClick={() => handleNavClick(introductionRef, "start")}
                    >
                        <img
                            src="/cb_logo_w50_gradient.png"
                            className="w-[30px] sm:w-[35px] md:w-[45px]"
                        />
                    </button>

                    <div
                        className="flex justify-center gap-10 md:gap-12 
                        lg:gap-16 text-xs sm:text-sm md:text-base"
                    >
                        <button
                            onClick={() => handleNavClick(worksRef)}
                            className="text-gray-200  cursor-pointer
                            "
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => handleNavClick(testimonialsRef)}
                            className="text-gray-200  cursor-pointer
                            "
                        >
                            Testimonials
                        </button>
                        <button
                            onClick={() => handleNavClick(newsletterRef)}
                            className="text-gray-200  cursor-pointer
                            "
                        >
                            Newsletter
                        </button>
                    </div>

                    <button
                        className="flex justify-center items-center hover:cursor-pointer
                        min-w-[50px] md:min-w-[75px] h-[30px] md:h-[40px] hover:bg-orange-400 duration-300 ease-in-out
                        bg-[#FEB519] rounded-2xl"
                    >
                        <span className="text-sm md:text-base text-gray-900 font-semibold">
                            Join
                        </span>
                    </button>
                </div>
            </motion.div>

            <div ref={introductionRef}>
                <Introduction />
            </div>

            <div className="flex justify-center py-[100px]">
                <Explosion height="25" width="25" />
            </div>

            <div ref={worksRef}>
                <HowItWorks />
            </div>

            <div className="flex justify-center py-[100px]">
                <Explosion height="25" width="25" />
            </div>

            <motion.div className="bg-gray-950 w-full">
                <SmartSearch />
            </motion.div>

            <div className="flex justify-center py-[100px]">
                <Explosion height="25" width="25" />
            </div>

            <div ref={testimonialsRef} className="bg-gray-950 w-full">
                <Testimonials />
            </div>

            <div className="flex justify-center py-[100px]">
                <Explosion height="25" width="25" />
            </div>

            <div ref={newsletterRef}>
                <Newsletter />
            </div>

            <div className="mt-[100px] border-t-[1px] border-gray-800 py-8">
                <p
                    className="text-center font-roboto text-gray-600 text-xs
                    select-none"
                >
                    &copy; 2025 Campus Bazaar - Student Marketplace Reimagined.
                </p>
            </div>
        </div>
    );
};

export default Home;
