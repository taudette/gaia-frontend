import React from 'react';
import HeroComponent from '../../components/Hero'
import VideosComponent from '../../components/Videos/index';
import { fetchVideos } from '../../actions';
import { connect } from 'react-redux';
import '../../styles/components/_home.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {   
    if (this.props.error) {
      return <p>Sorry! Something went wrong</p>
    }

    if (this.props.isFetching) {
      return <p>Loading...</p>
    }

    if (this.props.hasFetched) {
      const videoList = this.props.videos.slice(0, 10)

      return (
        <div>
          <HeroComponent hero={this.props.hero} />
          <VideosComponent videos={videoList} />
        </div>    
      )
    }

    return null
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    hero: state.hero,
    error: state.error,
    isFetching: state.isFetching,
    hasFetched: state.hasFetched
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchVideos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
