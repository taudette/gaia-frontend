import { FETCHING_VIDEOS, FETCHING_VIDEOS_SUCCESS, FETCHING_VIDEOS_FAILURE } from '../actions/actionTypes'

const initialState = { 
  videos: {},
  hasFetched: false,
  hero: {},
  isFetching: false,
  error: false,
  user: 'Tyler'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_VIDEOS':
      return {
        ...state,
        videos: {},
        hero: {},
        isFetching: true
      }
    case 'FETCHING_VIDEOS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        videos: action.data.videos,
        hero: action.data.hero
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
