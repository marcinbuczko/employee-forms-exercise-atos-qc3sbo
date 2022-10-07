export const optionsTpl = (items) =>
  [{ key: '', value: '' }, ...items].map(
    (i) => `<option value="${i.key}">${i.value}</option>`
  );

export const employeesListTpl = (employees) =>
  employees.length
    ? employees
        .map(
          (e) => `<div>
    <img class="avatar" src="http://localhost:3000/images/avatars/${e.imgURL}" />
    ${e.firstName} ${e.lastName}
  </div>`
        )
        .join('\n')
    : '<i>No results found</i>';
