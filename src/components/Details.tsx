
import React, { ButtonHTMLAttributes, useContext, useState ,useEffect} from 'react'
import MovieTvShowContext from '../context/MovieTvShowContext';
import {Link, resolvePath} from 'react-router-dom'
import { link } from 'fs';




function Details() {
const { movies, moviesLength, tvShow, tvShowLength, trialMovie, api_KEY, getTrialId} = useContext(MovieTvShowContext)

let about;
let absolutePath: string|number|undefined = window.location.hash;
 absolutePath = absolutePath.slice(1, absolutePath.length)
 absolutePath = parseInt(absolutePath);
let button: HTMLButtonElement|null = document.querySelector("button");
let title: string = "Loading...";
let videoImgSrc;
let isMovie: Boolean|undefined;
let isTvShow: Boolean |undefined;
let id: number ; 
let order: number = 0;

let goBack = "< Go back";


//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US



for (let i = 0; i < moviesLength; i++)
{

  if (absolutePath === movies.results[i].id)
  {
  
title = movies.results[i].title;
about = movies.results[i].overview;

id = i;

// if (movies.results[i].video !== false)
// {
//   videoImgSrc = trialLink;
// }
// else 
// {

//   videoImgSrc = movies.results[i].backdrop_path;
// }

videoImgSrc = `https://image.tmdb.org/t/p/w500${movies.results[i].poster_path}`;


    isMovie = true;
    break;
  }
  else
  {
isTvShow = true;
    isMovie = false;
  } 
// console.log(absolutePath);



}





//onsole.log("ID in details" + id)


for (let i = 0; i < tvShowLength; i++)
{
  
  if (absolutePath === tvShow.results[i].id)
  {
title = tvShow.results[i].name;
about = tvShow.results[i].overview;
isTvShow = true;
videoImgSrc = `https://image.tmdb.org/t/p/w500${tvShow.results[i].poster_path}`;
id = i;
// console.log("FROM DETAILS" + id)
break;
}
else
isTvShow = false;

}




// console.log("Movie -> " + isMovie + '\n' + "Tv Show -> " + isTvShow)
useEffect(()=>
{
getTrialId(id);

},[])



const prevent= (e:any) =>
{
  e.preventDefault();
  window.history.back();
}

//console.log(movies.results[order].original_title);
return (
  <div>
      {/* <video src="">

        <h1>{title}</h1>
      </video> */}

   <Link to={{
    pathname:'/',
   }}> <h1 className="go-back" onClick={(e:any)=>prevent(e) }  >{goBack}</h1></Link>

   <div className="details-container">
    <img src={videoImgSrc} alt="Image of film"/>
    <div className="details-container-text">

    <h1>{title}</h1>
    <p>{about}</p>
    </div>
   </div>
    </div>
  )
}

export default Details