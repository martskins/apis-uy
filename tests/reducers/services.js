import test from 'tape'
import reducer from '../../src/reducers/services'
import initialState from '../../src/config/services'

test('initial state is correct', function (t) {

  initialState.list.forEach(service => {
    t.equal(typeof service.id, 'number', `The id of ${JSON.stringify(service)} should be a number`)
    t.notEqual(service.name.trim(), '', `The name of ${JSON.stringify(service)} should be present`)
    t.notEqual(service.description.trim(), '', `The description of ${JSON.stringify(service)} should be present`)
    t.notEqual(service.url.trim(), '', `The url of ${JSON.stringify(service)} should be present`)
    t.notEqual(service.icon.trim(), '', `The icon of ${JSON.stringify(service)} should be present`)
    t.true(service.params instanceof Array, `The params of ${JSON.stringify(service)} should be an Array`)
    t.true(service.headers instanceof Array, `The headers of ${JSON.stringify(service)} should be an Array`)
    t.notEqual(service.method, '', `The method of ${JSON.stringify(service)} should be present`)
    t.equal(service.result, null, `The result of ${JSON.stringify(service)} should be null`)
  })

  t.end()

})
