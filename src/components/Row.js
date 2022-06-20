import React ,{useEffect,useState} from 'react'
import instance from '../instance'
import './Row.css'
const base_url="https://image.tmdb.org/t/p/original/"  


function Row({title,fetchUrl}) {
  const [movie,setMovies]=useState([])
  useEffect(() => {
    async function fecthData(){
      const request=await instance.get(fetchUrl)
      setMovies(request.data.results)
    }

    fecthData()
  }, [])
  // console.log("movie list are",movie);
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row__posters'>
          {movie.map(item=>(
            <img className='row_poster' alt={item.name} src={`${base_url}${item.backdrop_path}`}></img>
          ))}
        </div>
    </div>
  )
}

export default Row