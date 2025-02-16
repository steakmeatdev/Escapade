"use client";
import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

// New type to use outside for countries shit hehe
export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  country?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ country, onChange }) => {
  // Using object destructuring to extract only the getAll function from the returned object from useCountries(), could use const getAll = useCountries().getAll; but wanted to flex a little bit
  const { getAll } = useCountries();
  return (
    <>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        value={country}
        onChange={(value) => onChange(value as SelectCountryValue)}
      />
    </>
  );
};
export default SelectCountry;
