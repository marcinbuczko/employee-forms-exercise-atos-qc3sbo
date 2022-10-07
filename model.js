const baseURL = 'http://localhost:3000'

const contractTypeMap = require('./contractType')

export const fetchGeo = () =>
  fetch(`${baseURL}/geo`)
    .then(res => res.json())

export const fetchOffices = (country) => {
  const qs = country ? `?country=${country}` : ''
  return fetch(`${baseURL}/offices${qs}`)
    .then(res => res.json())
}

export const fetchManagers = (office) => {
  const qs = `?office_like=${office}&skills_like=management`
  return fetch(`${baseURL}/employees${qs}`)
    .then(res => res.json())
}

export const fetchProjects = (managerId) => {
  const qs = `?manager=${managerId}`
  return fetch(`${baseURL}/projects${qs}`)
    .then(res => res.json())
}

export const fetchEmployees = async ({managerId, contractType}) => {
  const projects = await fetchProjects(managerId)
  const teamMemberIds = projects
    .map(p => p.team)
    .flat()
    .map(member => member.id)
  if (teamMemberIds.length === 0) return []

  const parts = teamMemberIds.map(id => `id=${id}`)
  if (contractType) {
    parts.push(`contractType=${contractType}`)
  }
  const qs = `?` + parts.join('&')
  return fetch(`${baseURL}/employees${qs}`)
    .then(res => res.json())
}

export const getContractType = (countryCode) =>
  contractTypeMap[countryCode]
