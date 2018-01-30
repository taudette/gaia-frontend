import reducer from '../../reducers'

test('should set default state', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    "error": false, 
    "hasFetched": false, 
    "hero": {}, 
    "isFetching": false, 
    "user": "Tyler", 
    "videos": []
  });
});

