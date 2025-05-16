import React from 'react'
import { NETFLIX_BG } from '../Utils/constants'
import GPTSearchBar from './GPTSearchBar'

function GptSerach() {
  return (
    <>
    <div className="fixed -z-10">
      <img className="object-cover" src={NETFLIX_BG} alt="logo" />
    </div>
    <div className="">
      <GPTSearchBar />
     
    </div>
  </>
  )
}

export default GptSerach
