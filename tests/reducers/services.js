import test from 'tape'
import reducer from '../../src/reducers/services'
import * as ServiceActions from '../../src/actions/services'
import configureStore from '../../src/store/configureStore'
import { getOne } from '../utils'

test('initial state has the correct keys', function (t) {
  t.plan(1);
  const nextState = reducer(undefined, {})
  t.true(Object.keys(nextState).includes('current', 'list'))
});

test('initial state starts without any selected service', function (t) {
  t.plan(1);
  t.equal(reducer(undefined, {}).current, null)
});

test('initial state starts with at least one service', function (t) {
  t.plan(1);
  t.true(reducer(undefined, {}).list.length >= 1)
});

test('SHOW_DEFINITION action correctly selects the service', function (t) {
  t.plan(1);
  const state = { list: [{id: 1}], current: null }
  const action = { type: 'SHOW_DEFINITION', serviceId: 1 }
  const nextState = reducer(state, action)
  t.equals(nextState.current, 1)
});

test('UPDATE_PARAM_VALUE action correctly updates the param value', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, params: [{name: 'A', value: 'B'}]}] }
  const action = { type: 'UPDATE_PARAM_VALUE', serviceId: 1, name: 'A', value: 'C' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).params, 'name', 'A')
  t.equals(param.value, 'C')
});

test('UPDATE_PARAM_VISIBILITY action correctly updates the visibility', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, params: [{name: 'A', disabled: false}]}] }
  const action = { type: 'UPDATE_PARAM_VISIBILITY', serviceId: 1, name: 'A' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).params, 'name', 'A')
  t.equals(param.disabled, true)
});

test('UPDATE_HEADER_VALUE action correctly updates the header value', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, headers: [{name: 'A', value: 'B'}]}] }
  const action = { type: 'UPDATE_HEADER_VALUE', serviceId: 1, name: 'A', value: 'C' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).headers, 'name', 'A')
  t.equals(param.value, 'C')
});

test('UPDATE_HEADER_VISIBILITY action correctly updates the visibility', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, headers: [{name: 'A', disabled: false}]}] }
  const action = { type: 'UPDATE_HEADER_VISIBILITY', serviceId: 1, name: 'A' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).headers, 'name', 'A')
  t.equals(param.disabled, true)
});

test('QUERYING_SERVICE action correctly updates the service result', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, result: null}] }
  const action = { type: 'QUERYING_SERVICE', serviceId: 1 }
  const nextState = reducer(state, action)
  const service = getOne(nextState.list, 'id', 1)
  t.equals(service.result, 'loading')
});

test('SHOW_RESULT action correctly updates the service result', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, result: null}] }
  const action = { type: 'SHOW_RESULT', serviceId: 1, jsonResponse: { key: 'value', list: [1,2,3] } }
  const nextState = reducer(state, action)
  const service = getOne(nextState.list, 'id', 1)
  t.deepEqual(service.result, { key: 'value', list: [1,2,3] })
});
