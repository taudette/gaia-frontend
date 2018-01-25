const initialState = { data: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_REDUCER':
    return {
      ...state,
      data: 'testData'
    }
    default:
      return state
  }
}
