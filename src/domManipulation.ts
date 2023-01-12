import { getAllCountries } from '$utils/apiCountries';
import { getUsersCountry } from '$utils/apiUserCountry';

export async function appendItems() {
  const allCountries = await getAllCountries();

  const countriesListDiv = document.querySelector('[data-element="list"]');

  const countryA = document.querySelector('[data-element="item"]');

  countriesListDiv?.removeChild(countryA);

  allCountries.forEach((el) => {
    const countryItem = countryA.cloneNode(true);
    const countryName = el.name.common;
    countryItem.setAttribute('aria-label', countryName);
    countryItem.setAttribute('title', countryName);
    // Set the flag image
    countryItem.querySelector('[data-element="flag"]').setAttribute('src', el.flags.svg);
    countryItem.querySelector('[data-element="flag"]').setAttribute('alt', countryName + ' flag');
    // Set the name text
    countryItem.querySelector('[data-element="value"]').innerText = el.cca2;

    countriesListDiv?.appendChild(countryItem);
  });

  const countriesAs = document.querySelectorAll('[data-element="item"]');

  const selectedPhonePrefix = document.querySelector('[aria-label="Phone Prefix"]');

  const selectedCountryFlag = document.querySelector('[data-element="flag"].prefix-dropdown_flag');

  const selectedCountryCode = document.querySelector('[name="countryCode"]');

  // When a country is selected from the dropdown is going to be chosen
  countriesAs.forEach((domEl) => {
    domEl.addEventListener('click', () => {
      // Clean the phone element before adding a new one
      selectedPhonePrefix?.firstChild?.remove();
      allCountries.forEach((countryApi) => {
        const phoneNum: string = countryApi.idd.root + countryApi.idd.suffixes[0];
        const phoneNumString = document.createTextNode(phoneNum);
        if (countryApi.name.common === domEl.getAttribute('title')) {
          selectedPhonePrefix?.appendChild(phoneNumString);
          selectedCountryFlag?.setAttribute('src', countryApi.flags.svg);
          selectedCountryFlag?.setAttribute('alt', countryApi.name.common + ' flag');
          selectedCountryCode?.setAttribute('value', countryApi.cca2);
        }
      });
    });
  });
}
