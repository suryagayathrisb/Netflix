import React from 'react'
import './card.css'
import { useEffect,useState } from 'react'
import axios from '../../Static/axios'
import {API_KEY, img_url} from '../../Static/static'
import YouTube from 'react-youtube'
function Card(props) {
  const [movie, setMovie] = useState([])
  const [url, setUrl]=useState("")
  useEffect(() => {
          axios.get(props.url).then((response)=>{
              // console.log(response.data.results)
              setMovie(response.data.results)
          })
  },[])
  const getId=(id)=>{
    console.log(id)
    console.log("clicked")
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0].key)
      setUrl(response.data.results[0].key)
    })

  }


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
   };
  return (
    <div className='row'>
            <h2>{props.title}</h2>
        <div className='post'>
            {
              movie.map((obj)=>{
                return(
                  <img onClick={()=>getId(obj.id)} className='poster' src={ movie ? `${img_url+obj.backdrop_path}`:""} alt="" />
                  )
              })
            }

        </div>
        
    </div>
  )
}

export default Card