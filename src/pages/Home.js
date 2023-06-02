import React from 'react'
import Movie from '../components/Movie';
import '../App.css';

import { useState,useEffect } from 'react';
function Home() {
    let list =["Action","Adventure","Comedy","Crime","Drama","Experimental","Fantasy","Historical","Horror","Romance","Science Fiction","Thriller","Documentary","Family","Fantasy","Horror","War"];
    let [notes,setNotes] = useState([])

    let getNotes = async() => {
        let response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        let data = await response.json()
        setNotes(data)
    }

    useEffect(()=>{
        getNotes()
    },[])
  return (
    <div className='App'>
      <div className='Head'> 
        <input className='searchBar' placeholder=' Search movie' type='text' name='search' />
      </div>
      <div className="genre">
        <p className='title'> Genres </p>
        {list.map((g,index)=>
          <button className="genre-list" key={index}> {g} </button> 
        )}
      </div>
      <div className="Movie">
        <p className='title'> Movies </p>
        <div className='Movie-list'>
        {notes.map((note,index) =>(
          <Movie key={index} note={note}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
