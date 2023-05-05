import axios from './axios'
import React, { useState } from 'react'
import './Row.css'
import {  useSelector } from 'react-redux'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Row({title ,fetchURL, isLarge = false}) {

    const baseURL = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = React.useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    React.useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
        
    }, [fetchURL])


    const opts = {
        height:"390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (movie)=>{
        if (trailerUrl){
            setTrailerUrl('')
        } else {
            // console.log(movie)
            movieTrailer(movie?.title || movie?.name).then((url)=>{
                // console.log(url)
                const urlParms = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParms.get('v'))

            }).catch((error) => console.log(error))
        }
    }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
            {
                movies.map((movie) => (
                    <img
                    className={`row_poster ${isLarge &&"row_posterLarge"}`} 
                    src={`${baseURL}${
                        isLarge ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name}
                    key={movie.id}
                    onClick={()=>handleClick(movie)}
                    />
                ))

            }
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
