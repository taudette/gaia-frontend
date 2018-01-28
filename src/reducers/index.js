import { FETCHING_VIDEOS, FETCHING_VIDEOS_SUCCESS, FETCHING_VIDEOS_FAILURE } from '../actions/actionTypes'

const initialState = { 
  videos: {},
  videosFetched: false,
  isFetching: false,
  error: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_VIDEOS':
      return {
        ...state,
        videos: [],
        isFetching: true
      }
    case 'FETCHING_VIDEOS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        videos: action.data
      }
    case 'FETCHING_VIDEOS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
