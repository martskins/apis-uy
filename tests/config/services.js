import test from 'tape'
import initialState from '../../src/config/services'

test('initial state is complete', function (t) {

  initialState.list.forEach(service => {
    t.equal(typeof service.id, 'number', `The id of ${JSON.stringify(service)} should be a number`)
    t.notEqual(service.name.trim(), '', `The name of ${JSON.stringify(service)} should be present`)
    t.notEqual(service.description.trim(), '', `The description of ${JSON.stringify(service)} should be present`)
    t.notEqual(service.url.trim(), '', `The url of ${JSON.stringify(service)} should be present`)
    t.true(service.type === "jsonp" || service.type === "rest", `The type of ${JSON.stringify(service)} should be either jsonp or rest`)
    t.notEqual(service.icon.trim(), '', `The icon of ${JSON.stringify(service)} should be present`)
    t.true(service.params instanceof Array, `The params of ${JSON.stringify(service)} should be an Array`)
    t.true(service.headers instanceof Array, `The headers of ${JSON.stringify(service)} should be an Array`)
    t.notEqual(service.method, '', `The method of ${JSON.stringify(service)} should be present`)
    t.true(service.method === "GET" || service.method === "POST", `The method of ${JSON.stringify(service)} should be either GET or POST`)
    t.equal(service.result, null, `The result of ${JSON.stringify(service)} should be null`)
  })

  t.end()

})

test('initial state has non repeated ids', function (t) {

  const ids = initialState.list.map(service => service.id)

  initialState.list.forEach(service => {
    const occurrences = ids.filter(id => id === service.id).length
    t.equal(occurrences, 1, `The id ${service.id} is present only once`)
  })

  t.end()

})

test('initial state has no current selection', function (t) {

  t.plan(1)

  t.equals(initialState.current, null)

  t.end()

})

test('initial state has sequential ids', function (t) {

  let id = 0

  initialState.list.forEach(service => {
    t.equal(service.id, id + 1, 'Id should be sequential')
    id++
  })

  t.end()

})
