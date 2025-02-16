// Return all the countries with getAll() or a specific one using its value
// It's not really a hook just crappy functions that return either all the countries list or a specific one by its value

import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };
  return {
    getAll,
    getByValue,
  };
};
export default useCountries;
