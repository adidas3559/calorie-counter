import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import YouTube from 'react-youtube';

function App() {

  const opts = {
    height: '390',
    with: '640',
    playerVars: {
      autoplay: 1,
      loop: 1,
      fullscreen: 1
    }
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div>
          {/* <iframe src='https://www.youtube.com/embed/zHvj_FFN8kk?autoplay=1&mute=1&playlist=zHvj_FFN8kk&loop=1&controls=0'
            width='100%'
            height='720px'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            className='background-video'
          /> */}
          <h1 className='rickys-sticky'>Rick Bugez kalorie kounter</h1>
        </div>
        
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
