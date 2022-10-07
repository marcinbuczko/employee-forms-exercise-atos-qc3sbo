// READ README CAREFULLY

import './style.css';
import './avatar.css';
import './loader.css';
import './overlay.css';

import * as overlay from './overlay';

import {
  fetchGeo,
  fetchOffices,
  fetchManagers,
  getContractType,
  fetchEmployees,
} from './model';
import {
  $country,
  $office,
  $manager,
  $contractType,
  $search,
  $results,
  renderDropdown,
  renderResultList,
  clearCountryItems,
  clearCountryChoice,
  clearOfficeItems,
  clearOfficeChoice,
  clearManagerItems,
  clearManagerChoice,
  clearContractTypeItems,
  clearContractTypeChoice,
} from './dom';

// YOUR JOB STARTS HERE:

$country.addEventListener('change', (e) => {
  console.log('some data here', e);
});

// sample:
overlay.turnOn();
fetchGeo()
  .then((geoData) =>
    Object.entries(geoData).map(([key, value]) => ({ key, value }))
  )
  .then((geoData) => {
    renderDropdown($country, geoData);
  })
  .catch(alert)
  .finally(() => {
    overlay.turnOff();
  });

// another sample:
renderDropdown($office, [
  { key: 'o1', value: 'office-1' },
  { key: 'o2', value: 'office-2' },
  { key: 'o3', value: 'office-3' },
  { key: 'o4', value: 'office-4' },
  { key: 'o5', value: 'office-5' },
]);

// and one more sample:

$search.addEventListener('click', (e) => {
  e.preventDefault();
  fetchEmployees().then(renderResultList).catch(alert);
});

renderResultList([
  {
    firstName: 'Bertram',
    lastName: 'Kruszewski',
    imgURL: 'nurse-white-male.png',
  },
  {
    firstName: 'John',
    lastName: 'Herzog',
    imgURL: 'scuba-diver-black-male.png',
  },
]);
