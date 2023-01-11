export const getUsersCountry = async () => {
  const url = 'https://geolocation-db.com/json/';

  const country = await fetch(url, {
    method: 'GET',
  }).then((response) => response);

  console.log(country);

  //return country;
};
