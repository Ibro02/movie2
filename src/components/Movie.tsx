import React, { useContext } from 'react'
import CSS from 'csstype';
import Details from './Details';
import {Link} from 'react-router-dom'
import MovieTvShowContext from '../context/MovieTvShowContext';
const Movie = ({name, date, poster_path, id, vote_average}:{name: string, date: string, poster_path: string, id:number, vote_average: number}) => {

  const {getId, getElement} = useContext(MovieTvShowContext);
  //     const divStyle: CSS.Properties = {
// backgroundImage: `url(${poster_path})`,

//     };
const getProps = (e: React.MouseEvent) =>
{
  getId(id);
  getElement(e.currentTarget.innerHTML);
  //console.log("FROM MOVIE " + id);
  console.log(e.currentTarget.parentElement);

}
  return (
<Link to={{
    pathname: '/details',
    hash: `#${id}`,
  
}
}>
    <div  id={`${id}`} className='movie' onClick={((e: React.MouseEvent)=>getProps(e))}> {/*style={divStyle} */}
        <h1>{vote_average}</h1>
        <h2>{date}</h2>
        <h1 >{name}</h1>
        <img src={poster_path} alt="poster"/>
    </div>
        </Link>
  )
}

export default Movie