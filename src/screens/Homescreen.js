import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner.js'
import requests from '../Request'
import Row from '../Row'
function Homescreen() {
  return (
    <div>
      <Nav />
      <Banner />
      
      <Row title="Netflix Originals" fetchURL={requests.trending} isLarge/>
      <Row title="Trending" fetchURL={requests.topRated}/>
      <Row title="Action Movies" fetchURL={requests.actionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.comedyMovies}/>
      <Row title="Romance movies" fetchURL={requests.romanceMovies}/>
    </div>
  )
}
export default Homescreen
