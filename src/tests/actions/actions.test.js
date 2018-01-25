import { testAction } from '../../actions'

//use toEqual for objects or arrays
//use toBe for bool, #, string
test('should set up test action object', () => {
  const action = testAction('test data');

  expect(action).toEqual({
    type: 'TEST_ACTION',
    data: 'test data'
  })
})