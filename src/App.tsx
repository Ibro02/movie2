import React, { useState } from 'react';
import MovieHome from './components/MovieHome';

import './App.css';
import { MovieProvider } from './context/MovieTvShowContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Details from './components/Details';

function App() {
const [isMovie, setMovieActivation] = useState<Boolean>(true);
const [isTvShow, setisTvShowActivation] = useState<Boolean>(true);

const handleActivation = (movie: any,tvShow: any) =>
{
// console.log("Movie: " + movie + "\n" + "Tv Show: "+ tvShow)
setMovieActivation(movie);
setisTvShowActivation(tvShow)

}
  return (
<MovieProvider>
<Router>

<Routes>
<Route path="" index element={
  <div className="App">
      <Header handleActivation={handleActivation}/>
      <MovieHome activateMovie={isMovie} activateTvShow={isTvShow} />
    </div>
}/>
<Route path="/details" element={<Details/>}/>
{/* <Route path="/tvShows" index element={
    <div className="App">
<TvShowList/>
    </div>
}/> */}

</Routes>
  </Router>
</ MovieProvider>
  );
}

export default App;
