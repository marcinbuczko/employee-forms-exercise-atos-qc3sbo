import { optionsTpl, employeesListTpl } from './form-tpl';

export const $country = document.getElementById('country');
export const $office = document.getElementById('office');
export const $manager = document.getElementById('manager');
export const $contractType = document.getElementById('contract-type');
export const $search = document.getElementById('search');
export const $results = document.getElementById('results');

export const renderDropdown = ($selectNode, options) => {
  $selectNode.innerHTML = optionsTpl(options);
};
export const renderResultList = (list) => {
  $results.innerHTML = employeesListTpl(list);
};

export const clearCountryItems = () => renderDropdown($country, []);
export const clearOfficeItems = () => renderDropdown($office, []);
export const clearManagerItems = () => renderDropdown($manager, []);
export const clearContractTypeItems = () => renderDropdown($contractType, []);

export const clearCountryChoice = () => ($country.value = '');
export const clearOfficeChoice = () => ($office.value = '');
export const clearManagerChoice = () => ($manager.value = '');
export const clearContractTypeChoice = () => ($contractType.value = '');
