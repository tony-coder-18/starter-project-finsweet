import { getAllCountries } from '$utils/apiCountries';

import { appendItems } from './domManipulation';

window.Webflow ||= [];
window.Webflow.push(() => {
  appendItems();
});
