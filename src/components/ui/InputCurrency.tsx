type InputCurrencyProps = {
    required?: boolean;
    defaultValue?: number;
};

const InputCurrency = ({ required, defaultValue }: InputCurrencyProps) => {
    return (
        <div className="w-full max-w-sm min-w-[200px] m-0">
            <label
                htmlFor="price"
                className="block mb-1 font-semibold text-stone-200"
            >
                Price
            </label>

            <div className="relative mt-2">
                <input
                    defaultValue={
                        defaultValue !== undefined
                            ? (defaultValue / 100).toFixed(2)
                            : undefined
                    }
                    required={required}
                    name="price"
                    id="price"
                    type="number"
                    step={0.01}
                    min={0}
                    className="w-full bg-transparent placeholder:italic text-sm text-stone-100
                        border-[1px] border-stone-700 rounded pl-3 pr-20 py-2 transition duration-300 
                        focus:outline-none focus:border-amber-300/75 hover:border-amber-300/75
                        shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none
                        [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="34.99"
                />

                <div className="absolute top-2 right-0 flex items-center pr-3">
                    <div className="h-6 border-l border-stone-700 mr-2"></div>
                    <button
                        type="button"
                        id="dropdownButton"
                        className="h-full text-sm flex justify-center items-center bg-transparent text-stone-200 focus:outline-none"
                    >
                        <span id="dropdownSpan">USD</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputCurrency;
