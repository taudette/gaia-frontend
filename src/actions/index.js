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
    data: parseData(data)
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

const parseData = (data) => {

  const hero = {
    body: data.term && data.term.body || '',
    name: data.term && data.term.name || '',
    lgImage: data.term && data.term.termImages && data.term.termImages.hero && data.term.termImages.hero.hero_1125x414,
    smImage: data.term && data.term.termImages && data.term.termImages.hero && data.term.termImages.hero.hero_750x276
  }

  const videos = data.titles.map((video) => {
    return {
      img: video.hero_image && video.hero_image.hero_320x200 || '',
      title: video.title || '',
      segment: video.site_segment && video.site_segment.name || '',
      seasons: video.total_episodes || '',
      episodes: video.total_seasons || '',
      likes: video.fivestar && video.fivestar.up_count && video.fivestar.up_count.value || ''
    }
  })

  return { videos, hero }
}



