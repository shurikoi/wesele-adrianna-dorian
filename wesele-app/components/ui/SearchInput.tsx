interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <input
            type="text"
            placeholder="Imię lub kod"
            className="bg-[#D9C2A9] text-white rounded-lg p-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#C7A78B] placeholder:text-white"
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchInput;