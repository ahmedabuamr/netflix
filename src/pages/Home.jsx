import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Request'

export default function Home() {
  return (
    <>
     <Hero/>
     <Row rowID='1' title = "UpComing" fetchUrl = {requests.requestUpcoming}/>
     <Row rowID='2' title = "Popular" fetchUrl = {requests.requestPopular}/>
     <Row rowID='3' title = "Trending" fetchUrl = {requests.requestTrending}/>
     <Row rowID='4' title = "TopRated" fetchUrl = {requests.requestTopRated}/>
     <Row rowID='5' title = "Horror" fetchUrl = {requests.requestHorror}/>
    </>
  )
}
