import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchInput({
  placeholder = "Search...",
  onSearch,
  className = "",
  ...props
}) {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        placeholder={placeholder}
        className={` w-full
    bg-white/80 backdrop-blur-sm border border-neutral-200/60 
    px-5 py-3 pl-12 rounded-xl 
    transition-all duration-300 
    focus:border-neutral-300 outline-none
    text-neutral-800 placeholder-neutral-500
    shadow-sm hover:shadow-md focus:shadow-lg
    font-medium text-sm
    ${isFocused ? "bg-white border-neutral-300" : "hover:border-neutral-300"}
  `}
        name="search"
        type="search"
        value={searchValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />

      <Search
        size={18}
        className={`
          absolute top-3.5 left-4 pointer-events-none transition-colors duration-200
          ${isFocused ? "text-neutral-600" : "text-neutral-400"}
        `}
      />
    </div>
  );
}
