import { motion } from "motion/react";
import TestimonialCard from "src/components/Home/TestimonialCard";
import FloatingIcons from "src/components/Home/FloatingIcons";

const testimonials = [
    {
        name: "Dev Kharod",
        detail: "Computer Science Major, UCLA",
        comment:
            "This platform made it so easy to find affordable textbooks for my courses. Highly recommend to all students!",
        image: "/profiles/dev_kharod.png",
    },
    {
        name: "Donovan Mitchell",
        detail: "Economics Major, SJSU",
        comment:
            "I was able to sell my old laptop quickly and at a great price. The user interface is very intuitive.",
        image: "/profiles/donovan.png",
    },
    {
        name: "Derek Grim",
        detail: "Art History Major, UC Berkeley",
        comment:
            "A fantastic marketplace for students! I found unique items from fellow students that I wouldn't find anywhere else.",
        image: "/profiles/derek.png",
    },
    {
        name: "Martha Vespoli",
        detail: "Mechanical Engineering Major, USC",
        comment:
            "The campus community aspect of this marketplace is what sets it apart. I felt safe and confident buying and selling here.",
        image: "/profiles/martha.png",
    },
    {
        name: "Emily Liu",
        detail: "Biology Major, UCLA",
        comment:
            "I love how easy it is to connect with other students on this platform. Found great deals on lab equipment for my classes!",
        image: "/profiles/emily.png",
    },
    {
        name: "Carlos Mendez",
        detail: "Business Major, UCSD",
        comment:
            "This marketplace has become my go-to for buying and selling items on campus. The variety of products is impressive!",
        image: "/profiles/carlos.png",
    },
];

const Testimonials = () => {
    return (
        <>
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl text-gray-200 font-kellySlab
                        text-center text-shadow-md text-shadow-black
                        select-none"
            >
                Why Students Love It
            </motion.p>

            <div className="mt-[60px] w-full flex justify-center">
                <div className="w-[90%] max-w-[1500px]">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2
                        xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center
                        relative"
                    >
                        <FloatingIcons numIcons={20} />

                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="">
                                <TestimonialCard
                                    testimonial={testimonial}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
