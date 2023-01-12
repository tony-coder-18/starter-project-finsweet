import { getAllCountries } from '$utils/apiCountries';

import { appendItems, selectUsersCountry } from './domManipulation';

window.Webflow ||= [];
window.Webflow.push(() => {
  getAllCountries();

  appendItems();
});
