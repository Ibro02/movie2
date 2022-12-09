
import React, {Children, ReactChild, useContext, useEffect,useState } from 'react'
import MovieContext from '../context/MovieTvShowContext'
import Movie from './Movie';
import LoadingImg from '../img/512x512.gif'
import {v4 as uuidv4} from 'uuid'
import Spinner from './shared/Spinner';
import { type } from 'os';

//Prop types
type ContainerProps={
    children:   JSX.Element|JSX.Element[];
};

type mapProps =
{
    children: any;
}

//Additional functions
function MapContainer (props: mapProps)
{
    return <div className='movie-container'>{props.children}</div>
}
function Container(props: ContainerProps)
{
    return <div className='home-page'>{props.children}</div>;
}


//main
const MovieHome = ({activateMovie, activateTvShow}: any) => {

  
 
  const {isLoading, movies, moviesLength, tvShow, tvShowLength, search, searchLength} = useContext(MovieContext);

  
  let arrMovie = new Array();
  let nekaTestVelicina: number = 0;
  let mapMovie = new Map<any, any>();

let arrTvShow = new Array();
let mapTvShow = new Map<any, any>();


// function getMoviesAndTvShows<Type>(object?: Type)
// {
//     object = movies;
// return object;
// }
const mapping = () =>
{
    for (let i = 0; i < (moviesLength); i++) {
        nekaTestVelicina++;
        arrMovie.push(uuidv4());
        let name: string =movies.results[i].title;
        let date: Date = movies.results[i].release_date;
        let idMovie: number = movies.results[i].id;
        let ratingMovie: number = movies.results[i].vote_average;
        let poster_path: string = `https://image.tmdb.org/t/p/w500${movies.results[i].poster_path}`;
        mapMovie.set(arrMovie[i], <Movie key={uuidv4()} name={name} date={date.toString()} poster_path={poster_path} id={idMovie} vote_average={ratingMovie}/>)
       // console.log(arr)
       
      
    }

    for (let i = 0; i < (tvShowLength); i++)
    {
        arrTvShow.push(uuidv4());
        let nameTv: string =tvShow.results[i].name;
        let dateTv: Date = tvShow.results[i].first_air_date;
        let idTvShow: number = tvShow.results[i].id;
        let ratingTvShow: number = movies.results[i].vote_average;
        let poster_pathTv: string = `https://image.tmdb.org/t/p/w500${tvShow.results[i].poster_path}`;
        mapTvShow.set(arrTvShow[i], <Movie key={uuidv4()} name={nameTv} date={dateTv.toString()} poster_path={poster_pathTv} id={idTvShow} vote_average={ratingTvShow}/>)
    }


}

//because of map beeing unsafe to use, I made array which copy arguments from map and place it in main function
let arrOfMovies = new Array();
let arrOfTvShow = new Array();
let arr = new Array();
let top10Arr: any|any[]|object|undefined = new Array();

function showMovies()
{

    for (let i = 0; i < (moviesLength); i++) {
        nekaTestVelicina++;
        arrMovie.push(uuidv4());
        
        arrOfMovies.push(mapMovie.get(arrMovie[i]));
       // console.log(arr)
    }

    return arrOfMovies;
}



function showTvShows()
{

    for (let i = 0; i < (tvShowLength); i++) {
        nekaTestVelicina++;
        arrTvShow.push(uuidv4());
        
        arrOfTvShow.push(mapTvShow.get(arrTvShow[i]));
       // console.log(arr)
    }

    return arrOfTvShow;
}





const showTop10 = () =>
{

    if (!activateMovie)
    showMovies();
else if (!activateTvShow)
    showTvShows();
else
{
    showMovies();
    showTvShows();
}
//console.log()
//if (showMovie)
for (let i = 0; i < (tvShowLength); i++) {
    top10Arr.push(arrOfTvShow[i]);

}

for (let i = 0; i<moviesLength; i++)
top10Arr.push(arrOfMovies[i]);


 if(!activateMovie)
 {
    let arrForSearchMovies = top10Arr.slice(20,40);
    console.log(arrForSearchMovies);
    for (let i = 0; i < (moviesLength); i++) {
    }

    if (searchLength>2)
    {
        console.log(top10Arr);
        const searchedElements:any|undefined = arrForSearchMovies.filter((element:any|undefined) =>{
            // console.log(element.props.name)
            let name: string|any = " "; //ovdje se pojavljuje error zato sto kad se refresa desi se sranje
            if (element.props.name !==undefined)
            name = element.props.name;
            else 
            name = "asdo"
         if (name.includes(search)||name.toUpperCase().includes(search.toUpperCase())||name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
         return element;
        })
        
        console.log(top10Arr);

        return searchedElements;
    }
 }
 else if (!activateTvShow)
 {
     
     for (let i = 0; i < (tvShowLength); i++) {
    }
    
    let arrForSearchShows= top10Arr.slice(0,20);
    console.log(arrForSearchShows);
    if (searchLength>2)
    {

        console.log(top10Arr);

        const searchedElements:any|undefined = arrForSearchShows.filter((element:any|undefined) =>{
            // console.log(element.props.name)
            let name: string|any = " "; //ovdje se pojavljuje error zato sto kad se refresa desi se sranje
            if (element.props.name !==undefined)
            name = element.props.name;
            else 
            name = "asdo"
         if (name.includes(search)||name.toUpperCase().includes(search.toUpperCase())||name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
         return element;
        })

        console.log(top10Arr);
        return searchedElements;
    }
 }
else
for (let i = 0; i < (moviesLength+tvShowLength); i++) {
            }

            if (searchLength>2)
            {
        console.log(top10Arr);

                const searchedElements:any|undefined = top10Arr.filter((element:any|undefined) =>{
                    // console.log(element.props.name)
                    let name: string|any = " "; //ovdje se pojavljuje error zato sto kad se refresa desi se sranje
                    if (element.props.name !==undefined)
                    name = element.props.name;
                    else 
                    name = "asdo"
                 if (name.includes(search)||name.toUpperCase().includes(search.toUpperCase())||name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                 return element;
                })

                console.log(top10Arr);
                return searchedElements;
            }
            
            top10Arr.sort((a: any,b:any) => b.props.vote_average - a.props.vote_average);
            top10Arr = top10Arr.slice(0,10);

           
//console.log(typeof(tvShow))
            return top10Arr;
}



function show()
{

if (!activateMovie)
    showMovies();
else if (!activateTvShow)
    showTvShows();
else
{
    showMovies();
    showTvShows();
}

    //console.log()
    //if (showMovie)
    for (let i = 0; i < (tvShowLength); i++) {
arr.push(arrOfTvShow[i]);
    }


   // if(showTvShow)
    for (let i = 0; i < (moviesLength); i++) {
        arr.push(arrOfMovies[i]);
            }
//console.log(arr);

            return arr;

}



if (!isLoading && (!movies || moviesLength === 0))
{
    return Spinner();
}
else 
{

    return (
        
<Container>
<>
 
{ 
mapping()
}
<MapContainer>
<h1 className='titles'>Top 10</h1>
{showTop10()}

</MapContainer>


     <MapContainer>
<h1 className='titles'>Explore more!</h1>
        
        {show()}
        
        </MapContainer>
      
      
</>
  </Container>
  )
}
}
export default MovieHome