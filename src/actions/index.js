import { FETCHING_VIDEOS, FETCHING_VIDEOS_SUCCESS, FETCHING_VIDEOS_FAILURE } from './actionTypes';

const url = 'https://d6api.gaia.com/videos/term/119931'
const headers = { headers: { 'accept': 'application/json' } } 

export const getVideos = () => {
  return {
    type: FETCHING_VIDEOS
  }
}

export const getVideosSuccess = (data) => {
  return {
    type: FETCHING_VIDEOS_SUCCESS,
    data
  }
}

export const getVideosFailure = () => {
  return {
    type: FETCHING_VIDEOS_FAILURE
  }
}

export const fetchVideos = () => {
  return (dispatch) => {
    //set loader
    dispatch(getVideos())

    fetch(url, headers)
      .then((resp) => {
        if(!resp.ok) {
          throw Error(resp.statusText)
        }
        return resp.text()
      })
      .then((resp) => JSON.parse(resp))
      .then((data) => { 
        dispatch(getVideosSuccess(data))
      })
      .catch((error) => {
        dispatch(getVideosFailure)
      })
  }
}



