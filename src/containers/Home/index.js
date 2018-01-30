import React from 'react';
import HeroComponent from '../../components/Hero';
import VideosComponent from '../../components/Videos';
import LoadButtonsComponent from '../../components/LoadButtons';
import { fetchVideos } from '../../actions';
import { connect } from 'react-redux';
import '../../styles/components/_home.scss';

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    //use component state to store videos to be displayed
    this.state = {
      index: 16,
      loading: false,
      listLength: ''
    }
  }

  componentDidMount() {
   this.props.fetchData && this.props.fetchData() || null
  }

  addVideos = (e) => {
    e.preventDefault()
    this.setState({ loading: true })

    //if possible add 16 videos to the screen
    //if not just show the rest remaining
    let endIndex = this.state.index
    const listLength = this.props.videos.length

    if (listLength >= this.state.index + 16) {
      endIndex += 16
    } else {
      endIndex = listLength
    }

    if (this.state.index == listLength) {
      return null
    }

    this.setState({ listLength: listLength })
    this.setState({ index: endIndex })
    this.setState({ loading: false })
  }

  goToTop = (e) => {
    e.preventDefault();
		return window.scrollTo(0,0);
  }

  render() {
    //check if there are as many videos as initially requested and show first batch (16)
    if (this.props.videos) {
      let videoList = this.props.videos.length >= this.state.index ? this.props.videos.slice(0, this.state.index) : this.props.videos
    }
    

    if (this.props.error) {
      return <p>Sorry! Something went wrong</p>
    }

    if (this.props.isFetching) {
      return <p>Loading...</p>
    }

    if (this.props.hasFetched) {
      return (
        <div>
          <HeroComponent hero={this.props.hero} />
          <VideosComponent videos={videoList} loading={this.state.loading} />
          <LoadButtonsComponent addVideos={this.addVideos} goToTop={this.goToTop} endIndex={this.state.index} listLength={this.state.listLength} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
