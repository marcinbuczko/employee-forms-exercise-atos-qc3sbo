export const geoToItems = geoData => Object.entries(geoData)
  .map(([key, value]) => ({ key, value }))

export const officesToItems = officesData => officesData
  .map(o => ({
    key: o.city,
    value: `${o.city}, ${o.address}`
  }))

export const managersToItems = managersData => managersData
  .map(m => ({
    key: m.id,
    value: `${m.firstName} ${m.lastName}, ${m.title}`
  }))

export const contractTypesToItems = contractTypes => contractTypes
  .map(ct => ({
    key: ct,
    value: ct
  }))
