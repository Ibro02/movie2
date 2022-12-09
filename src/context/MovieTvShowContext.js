
import { useState,createContext, useEffect } from "react";

const MovieTvShowContext = createContext();

export const MovieProvider = ({children}) =>
{
const [movies, setMovies] = useState([]);
const [moviesLength, setMoviesLength] = useState(0);

const [tvShow, setTvShow] = useState([]);
const [tvShowLength, setTvShowLength] = useState(0);

const [element, setElement] = useState();

const [trialMovie, setTrialMovie] = useState();
//const [trialMovie, setTrialMovie] = useState();

const [trialId, setTrialID]=useState();
const [search, setSearch] = useState(" "); 
const [searchLength, setSearchLength] = useState(0);

const [id, setId] = useState(0);

    useEffect(()=>
    {
        fetchMovie();
       fetchTvShow();
     fetchTrialMovie(id);
    
    },[])

    //API key
    const api_KEY = 'c9f8295bd53fd2a978a080c79f8cb5e1';
    
    //Fetch TvShow
    const fetchTvShow = async () =>
    {
        const response = await fetch(
`https://api.themoviedb.org/3/discover/tv?api_key=${api_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`        )
        const data = await response.json()
        .catch(err => {
            console.log(err);
            return {} 
          })
        setTvShow(data);
    
 setTvShowLength(data.results.length); 

    }



    //Fetch movie
    const fetchMovie = async () =>
    {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        )
        const data = await response.json()
        setMovies(data);
        
 setMoviesLength(data.results.length);

    }
    //Fetch movie trial
    
const fetchTrialMovie = async (id) =>
{
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${trialId}/videos?api_key=${api_KEY}&language=en-US`
    )
    const data = await response.json()
    if(data === undefined) {return}

 
    console.log(data)
   
    setTrialMovie(`https://www.youtube.com/watch?v=${data.results[trialId].key}`)
    console.log(trialMovie)

     console.log("data key->>>" + data.results[trialId].key);


}
    function getId(e) 
    {
        //console.log("konozla -> "+e);
    setId(e);

    }


    function getSearch(e)
    {
       
setSearch(e)
setSearchLength(e.length)
console.log(search)

    }


    function getTrialId(e)
    {
setTrialID(e)  }


    function getElement(e) { setElement(e) }
    return <MovieTvShowContext.Provider value={
        {
            movies, moviesLength, tvShow, tvShowLength,id,search,searchLength,getId,getElement,getSearch, api_KEY, trialMovie, getTrialId
        }
    }
    >{children}</MovieTvShowContext.Provider>
}

export default MovieTvShowContext;