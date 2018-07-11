import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


const API_KEY = 'AIzaSyCnDKcxsMboxTXh75wEaNL_0VTpIIe-UFM';



class App extends Component {
  
  state = {
    videos: [],
    selectedVideo: null
  }

  // videoSelectHandler = (event) => {
  //   console.log(event);
  // }
  
  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  componentDidMount = () => {
    this.videoSearch('reactjs');
  }

    

  

  render() {
    return (
      <div className="App">
        {console.log('Now rendering...')}
        <SearchBar 
          onSearchTermChange = { term => this.videoSearch(term)} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videoSelect = {selectedVideo => this.setState({selectedVideo})} 
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
