import { FETCHING_VIDEOS, FETCHING_VIDEOS_SUCCESS, FETCHING_VIDEOS_FAILURE } from '../actions/actionTypes'

const testState = {
  videos: [
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/pX2eiKEw1fEa-kna-sJVIOaD-lG5549fRCHPvm2wNTU/mtime%3A1510239912/sites/default/files/imagecache/hero_320x200/product_series_hero_image/open-minds_series_hero_0.jpg',
      title: 'Open Minds',
      segment: 'Seeking Truth',
      seasons: '287',
      episodes: '10',
      likes: 4517,
      dislikes: 582
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/sj70MJOgUsotI0T0akjRKaI3r7iifYN4Ej314M2GCxo/mtime%3A1515631568/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/168001_wt_s28e9_the-storms-of-saturn_16x9.jpg',
      title: 'The Storms of Saturn',
      segment: 'Seeking Truth',
      seasons: '',
      episodes: '',
      likes: 692,
      dislikes: 36
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/W95gfuF-adxQHDkbzD-NSQLLKxkno3zu9XOeVF-h1h0/mtime%3A1502742448/sites/default/files/imagecache/hero_320x200/product_series_hero_image/30760_wisdom-teachings_series_hero-2.jpg',
      title: 'Wisdom Teachings',
      segment: 'Seeking Truth',
      seasons: '249',
      episodes: '28',
      likes: 5728,
      dislikes: 689
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/M4L9KirCbR7xzSD-2rhoRQ4NsJu3hFXBkcRE68KuX5U/mtime%3A1516752343/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/168161_wt_s28e10_the-uranian-activation_16x9.jpg',
      title: 'The Uranian Activation',
      segment: 'Seeking Truth',
      seasons: '',
      episodes: '',
      likes: 165,
      dislikes: 5
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/S521Fk-2JygPyPEv9aBp1hQsNe5TafFkPlnNmKUnqiQ/mtime%3A1515113389/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/167086_bb_s8e23_ancient-tales-of-death-and-resurrection_w_freddy-silva_16x9.jpg',
      title: 'Ancient Tales of Death and Resurrection with Freddy Silva',
      segment: 'Seeking Truth',
      seasons: '',
      episodes: '',
      likes: 494,
      dislikes: 35
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/4S01_c3is1c6Hh0407L1QynAMpUWkz40-YKp-CBMakM/mtime%3A1489050218/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/137421_ml_s1e11_awakening-the-heart-brain-union_16x9.jpg',
      title: 'Awakening the Heart-Brain Union',
      segment: 'Transformation',
      seasons: '',
      episodes: '',
      likes: 3861,
      dislikes: 243
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/dLxL307JISNKghHcQakIK8c5Xyq0-yiL1ikr1cGnhow/mtime%3A1497540929/sites/default/files/imagecache/hero_320x200/product_series_hero_image/135476_missing-links_series_hero.jpg',
      title: 'Missing Links',
      segment: 'Transformation',
      seasons: '20',
      episodes: '1',
      likes: 3818,
      dislikes: 260
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/qHNPKhzEa61m6fbTZoLJ_oCzTi98U1f-fEpysI_t4Hw/mtime%3A1482474320/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/135486_ml_s1e1_cycles-of-time_16x9.jpg',
      title: 'Cycles of Time',
      segment: 'Transformation',
      seasons: '',
      episodes: '',
      likes: 4436,
      dislikes: 300
    },
    {
      img: 'https://img.gtvcdn.com/cdn/farfuture/3xSvkbkXxuv5Vf5gy9xeaIoLzz__EhElXvAUEkEqz9c/mtime%3A1511228695/sites/default/files/imagecache/hero_320x200/img_16x9_landsacpe_title/164091_wt_s28e2_the-sun-and-dna-activation_16x9.jpg',
      title: 'The Sun and DNA Activation',
      segment: 'Seeking Truth',
      seasons: '',
      episodes: '',
      likes: 1410,
      dislikes: 79
    }
  ],
  hasFetched: true,
  hero: {
    body: 'There\'s more to our universe than meets the eye. In this thought-provoking video collection, you\'ll discover stories of scientific exploration, spiritual metaphysics, alternate realities and mystic messages. Gaia has scoured the globe to bring you the best in metaphysical videos that encourage you to expand your horizons and think outside the box.',
    name: 'Metaphysics',
    lgImage: 'https://img.gtvcdn.com/cdn/farfuture/W5Y-vX3OL19oibb635yVOlNxRlGT38vrZPWVRbemYbM/mtime%3A0/sites/default/files/imagecache/term_hero_1440x300/term_images/metaphysics_2.jpg'
  },
  isFetching: false,
  error: false,
  user: 'Tyler'
}

const initialState = { 
  videos: {},
  hasFetched: false,
  hero: {},
  isFetching: false,
  error: false,
  user: 'Tyler'
}

export default function reducer (state = testState, action) {
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
