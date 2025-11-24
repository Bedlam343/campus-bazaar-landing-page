type SpinnerProps = {
    text?: string;
    textClassName?: string;
};

const Spinner = ({ text, textClassName = "" }: SpinnerProps) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className="text-neutral-100 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="text-neutral-100 !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
            {text && (
                <p className={`mt-2 text-neutral-100 ${textClassName}`}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default Spinner;
