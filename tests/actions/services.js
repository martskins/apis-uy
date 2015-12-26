import test from 'tape'
import sinon from 'sinon'
import * as ServiceActions from '../../src/actions/services'
import configureStore from '../../src/store/configureStore'

test('showDefinitions', function (t) {
  t.plan(1);
  t.deepEqual(ServiceActions.showDefinition(1), { type: 'SHOW_DEFINITION', serviceId: 1 });
});

test('updateParamValue', function (t) {
  t.plan(1);
  t.deepEqual(ServiceActions.updateParamValue(1, 'key', 'value'), { type: 'UPDATE_PARAM_VALUE', serviceId: 1, name: 'key', value: 'value' });
});

test('updateParamVisibility', function (t) {
  t.plan(1);
  t.deepEqual(ServiceActions.updateParamVisibility(1, 'key'), { type: 'UPDATE_PARAM_VISIBILITY', serviceId: 1, name: 'key' });
});

test('updateHeaderValue', function (t) {
  t.plan(1);
  t.deepEqual(ServiceActions.updateHeaderValue(1, 'headerKey', 'headerValue'), { type: 'UPDATE_HEADER_VALUE', serviceId: 1, name: 'headerKey', value: 'headerValue' });
});

test('updateHeaderVisibility', function (t) {
  t.plan(1);
  t.deepEqual(ServiceActions.updateHeaderVisibility(1, 'headerKey'), { type: 'UPDATE_HEADER_VISIBILITY', serviceId: 1, name: 'headerKey' });
});

//It is impossible to unit test this from node due to the nature of jsonp requests
// test('queryService', function (t) {
//   t.plan(1);

//   const store = configureStore()
//   const dispatch = sinon.stub(store, 'dispatch')
//   const fn = ServiceActions.queryService(1)

//   fn(dispatch, store.getState)

//   t.true(dispatch.calledWith({ type: 'QUERYING_SERVICE', serviceId: 1 }), 'The returning function should dispatch the QUERYING_SERVICE action')
// });
