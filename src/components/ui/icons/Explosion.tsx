type ExplosionProps = {
    height?: string;
    width?: string;
};

const Explosion = ({ height = "50", width = "50" }: ExplosionProps) => (
    <svg
        className="coolshapes explosion"
        height={height}
        width={width}
        fill="none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#cs_clip_1_star-12)">
            <mask
                height="200"
                id="cs_mask_1_star-12"
                style={{ maskType: "alpha" }}
                width="200"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path
                    d="M100 200l-14.412-72.059L45 155l27.059-40.588L0 100l72.059-14.412L44.999 45l40.59 27.059L100 0l14.412 72.058L155 45l-27.059 40.588L200 100l-72.059 14.412L155 155l-40.588-27.059L100 200z"
                    fill="#fff"
                />
            </mask>
            <g mask="url(#cs_mask_1_star-12)">
                <path d="M200 0H0v200h200V0z" fill="#fff" />
                <path d="M200 0H0v200h200V0z" fill="#d1d5dc" />
                <g filter="url(#filter0_f_748_4304)">
                    <path d="M177 33H95v134h82V33z" fill="#d1d5dc" />
                    <ellipse
                        cx="110.5"
                        cy="133.5"
                        fill="#d1d5dc"
                        rx="35.5"
                        ry="33.5"
                    />
                </g>
            </g>
        </g>
        <g style={{ mixBlendMode: "overlay" }} mask="url(#cs_mask_1_star-12)">
            <path
                d="M200 0H0v200h200V0z"
                fill="gray"
                stroke="transparent"
                filter="url(#cs_noise_1_star-12)"
            />
        </g>
        <defs>
            <filter
                height="294"
                id="filter0_f_748_4304"
                width="262"
                x="-5"
                y="-47"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood result="BackgroundImageFix" floodOpacity="0" />
                <feBlend
                    result="shape"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                />
                <feGaussianBlur
                    result="effect1_foregroundBlur_748_4304"
                    stdDeviation="40"
                />
            </filter>
            <clipPath id="cs_clip_1_star-12">
                <path d="M0 0H200V200H0z" fill="#fff" />
            </clipPath>
        </defs>
        <defs>
            <filter
                height="100%"
                id="cs_noise_1_star-12"
                width="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
            >
                <feBlend result="out3" in="SourceGraphic" in2="out2" />
            </filter>
        </defs>
    </svg>
);

export default Explosion;
