export const getAllCountries = async () => {
  const url = 'https://restcountries.com/v3.1/all';

  const countries = await fetch(url, {
    method: 'GET',
  }).then((response) => response.json());

  console.log(countries);

  return countries;
};
