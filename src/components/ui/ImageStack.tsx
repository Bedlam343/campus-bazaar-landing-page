type ImageStackProps = {
    objectUrls: string[];
    onClick: () => void;
};

const ImageStack = ({ objectUrls, onClick }: ImageStackProps) => {
    return (
        <>
            {objectUrls.length > 0 && (
                <div
                    onClick={onClick}
                    className="relative w-[80px] h-[80px] cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${objectUrls.length} uploaded images in gallery`}
                >
                    {/* Only show up to 3 images for the stack effect */}
                    {objectUrls.slice(0, 3).map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Thumbnail ${index + 1}`}
                            // Apply stacking and slight offset for depth
                            className={`
                    absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl border-2 border-white transition-all duration-500
                    ${index === 0 ? "z-30 transform hover:scale-105" : ""}
                    ${
                        index === 1
                            ? "z-20 transform translate-x-1 translate-y-1 opacity-80 group-hover:translate-x-2 group-hover:translate-y-2"
                            : ""
                    }
                    ${
                        index === 2
                            ? "z-10 transform translate-x-2 translate-y-2 opacity-60 group-hover:translate-x-3 group-hover:translate-y-3"
                            : ""
                    }
                  `}
                        />
                    ))}

                    <div
                        className="absolute inset-0 z-40 flex items-center justify-center 
                    bg-stone-950/25 rounded-xl text-white font-extrabold text-2xl 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        +{objectUrls.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageStack;
