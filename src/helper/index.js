export function getMaxValue (items, attr) {
  const init = {}
  init[attr] = 0
  const max = items.reduce((max, item) => {
    return item[attr] > max[attr] ? item : max
  }, init)
  return max[attr]
}

export function getMinValue (items, attr) {
  const init = {}
  init[attr] = Number.POSITIVE_INFINITY
  const min = items.reduce((min, item) => {
    return item[attr] < min[attr] ? item : min
  }, init)
  return min[attr]
}

export function filterIncludes (items, field, value) {
  return items.filter((i) => (i[field].toLowerCase()).includes(value.toLowerCase()))
}
export function filterIsEqual (items, field, value) {
  return items.filter((i) => (i[field] === value))
}
export function filterLessThan (items, field, value) {
  return items.filter((i) => (i[field] <= value))
}
export function filterMoreThan (items, field, value) {
  return items.filter((i) => (i[field] >= value))
}
