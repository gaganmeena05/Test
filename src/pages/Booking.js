import React from 'react'
import { useState,useEffect } from 'react'
import Fullview from '../components/Fullview';
import { useParams} from 'react-router-dom'
import '../App.css';

function Booking() {
  let [notes,setNotes] = useState([])
  let para = useParams()
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
      {notes.map((note,index) =>{
          if(note.show.id == para.id){
            return <Fullview key={index} note={note}/>;
          }
          else return <></>;
      })}
    </div>
  )
}

export default Booking
