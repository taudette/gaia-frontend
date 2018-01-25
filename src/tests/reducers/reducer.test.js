import reducer from '../../reducers'

test('should set default values', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    data: ''
  });
});

test('should set test data', () => {
  const state = reducer(undefined, { type: 'TEST_REDUCER' });
  expect(state.data).toBe('testData');
})