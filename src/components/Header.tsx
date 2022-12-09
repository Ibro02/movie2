import React, {useContext, useState,useEffect} from 'react'

import MovieTvShowContext from '../context/MovieTvShowContext';

//import {BrowserRouter as NavLink} from 'react-router-dom';
function Header({handleActivation}:any) {
    // const [isMovies, activateMovie] = useState<Boolean>();
    // const [isTvShow, activateTvShow] = useState<boolean>();

 interface IInput {
value: String;
 }
const {getSearch} = useContext(MovieTvShowContext);

    let isMovie = true;
    let isTvShow = true;

    let input = document.querySelector("input");
    let inputValue: string;

    const find = (e:React.FormEvent<HTMLInputElement>) =>
    {
inputValue = e.currentTarget.value;
getSearch(inputValue);

    }

    let ul = document.querySelector('ul');

    ul?.addEventListener("click", ()=>
    {
       inputValue= " ";
    })
    function choosingSection(element: React.MouseEvent)
    {
    const movie: string = "Movies";
    const tvShow: string = "TV Shows"; //for cases if needed 

      //  console.log(element.currentTarget.innerHTML);

        if (element.currentTarget.innerHTML=== movie ) 
        {
        console.log(element.currentTarget.innerHTML + '\n MOVIE')
             
        isMovie = false;
        isTvShow = true;
    }
        else if (element.currentTarget.innerHTML === tvShow)
        {
            console.log(element.currentTarget.innerHTML + '\n TV SHOW')


            isMovie = true;
            isTvShow= false;
       
            console.log("You clicked Show")
        }
        else
        {
            console.log(element.currentTarget.innerHTML + '\n HOME')
            
            isMovie = true;
            isTvShow = true;
        }

        handleActivation(isMovie, isTvShow)   
    }


    let style: React.CSSProperties = {
    textDecorationLine: "underline"
    }
    let defaultStyle: React.CSSProperties = {
        textDecorationLine: "overline"
        }
  return (
    
    <nav>
        <ul>
   
            <li className="tv-shows" onClick={(e) => choosingSection(e)}  value='movie'>TV Shows</li>
            <li className="liMovies" onClick={(e) => choosingSection(e)}  value='show'>Movies</li>
           <li className="top-10-movie-tvShows" onClick={(e) => choosingSection(e)}>Home</li>
        </ul>
        <input className="search-bar" type="text" placeholder='Search...' onChange={(e:React.FormEvent<HTMLInputElement>)=>find(e)}/>
    </nav>
  )
}

export default Header