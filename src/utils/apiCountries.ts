export const getAllCountries = async (): Promise<object[]> => {
  const url = 'https://restcountries.com/v3.1/all';

  const countries = await fetch(url, {
    method: 'GET',
  }).then((response) => response.json());

  return countries;
};
