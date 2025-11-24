import { motion, type Variants } from "motion/react";

type TestimonialCardProps = {
    testimonial: {
        name: string;
        detail: string;
        comment: string;
        image: string;
    };
    index: number;
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
    const randomRotation = 3 * (Math.random() - 0.5); // Random rotation between -1.5 and 1.5 degrees

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotate: randomRotation,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9], // A smooth, slightly 'springy' ease
                delay: index * 0.1, // Stagger the appearance of each card
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "300px" }}
            className="bg-gray-900/50 backdrop-blur-[1px] p-6 rounded-xl 
            w-[300px] md:w-[350px] relative overflow-hidden shine-effect
            hover:bg-gray-900/75 hover:scale-[1.03] transition-all duration-300
            border-[1px] border-gray-800"
        >
            <div className="flex items-center mb-4">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[75px] h-[75px] rounded-full mr-4 object-cover"
                    loading="lazy"
                />
                <div>
                    <p
                        className="font-semibold text-lg font-roboto
                        text-gray-100 select-none"
                    >
                        {testimonial.name}
                    </p>
                    <p
                        className="text-sm text-orange-100 font-roboto
                        select-none"
                    >
                        {testimonial.detail}
                    </p>
                </div>
            </div>
            <p className="text-gray-300 italic select-none">
                "{testimonial.comment}"
            </p>
        </motion.div>
    );
};

export default TestimonialCard;
