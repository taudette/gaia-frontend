import React from 'react';
import HeroContainer from '../Hero'
import VideosContainer from '../Videos/index';
import { fetchVideos } from '../../actions';
import { connect } from 'react-redux';
import '../../styles/components/_home.scss';


class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <HeroContainer />
        <VideosContainer />
      </div>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    error: state.error,
    isFetching: state.isFetching

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchVideos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
