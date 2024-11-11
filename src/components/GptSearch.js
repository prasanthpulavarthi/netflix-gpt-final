import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
        <img
          class="concord-img vlv-creative"
          src={BG_URL}
          alt=""
        ></img>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>



    </div>
  )
}

export default GptSearch