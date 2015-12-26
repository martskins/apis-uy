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
  const state = { list: [{id: 1, params: [{name: 'A', value: 'B'}]}], current: null }
  const action = { type: 'UPDATE_PARAM_VALUE', serviceId: 1, name: 'A', value: 'C' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).params, 'name', 'A')
  t.equals(param.value, 'C')
});

test('UPDATE_PARAM_VISIBILITY action correctly updates the visibility', function (t) {
  t.plan(1);
  const state = { list: [{id: 1, params: [{name: 'A', disabled: false}]}], current: null }
  const action = { type: 'UPDATE_PARAM_VISIBILITY', serviceId: 1, name: 'A' }
  const nextState = reducer(state, action)
  const param = getOne(getOne(nextState.list, 'id', 1).params, 'name', 'A')
  t.equals(param.disabled, true)
});
