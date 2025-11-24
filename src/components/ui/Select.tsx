import ReactSelect, {
    type GroupBase,
    type OptionsOrGroups,
} from "react-select";

type SelectProps = {
    options: OptionsOrGroups<any, GroupBase<any>>;
    defaultValue?: any;
    name: string;
};

const Select = ({ options, defaultValue, name }: SelectProps) => {
    return (
        <ReactSelect
            required
            options={options}
            menuPortalTarget={document.body}
            defaultValue={defaultValue}
            name={name}
            id={name}
            placeholder="Select"
            className="w-[150px] mt-2"
            styles={{
                menuPortal: (base) => ({
                    ...base,
                    zIndex: 35,
                }),
                control: (base, state) => ({
                    ...base,
                    backgroundColor: "transparent",
                    borderColor: state.isFocused ? "#FFD230BF" : "#44403b",
                    "&:hover": {
                        borderColor: "#FFD230BF",
                    },
                    transition: "border-color 300ms",
                    boxShadow: "none",
                }),
                singleValue: (base) => ({
                    ...base,
                    color: "#f5f5f4",
                    fontSize: "14px",
                }),
                placeholder: (base) => ({
                    ...base,
                    fontStyle: "italic",
                    fontSize: "14px",
                    color: "#a1a1aa",
                }),
            }}
        />
    );
};

export default Select;
