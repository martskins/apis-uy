import test from 'tape'
import * as ServiceActions from '../../src/actions/services'
import initialState from '../../src/config/services'

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
