export function getOne (collection, key, value) {
  return collection.filter(item => item[key] === value)[0]
}