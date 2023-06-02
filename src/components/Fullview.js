import React from 'react'
import { useState,useEffect} from 'react'

function Fullview(props) {
    let [check,setstate] = useState(0);
    let update = () =>{
        if(check === 0 ){
            setstate(1);
        } else {
            setstate(0);           
        } 
    }
    useEffect(()=>{
        setstate(0);
    },[])

    const str = props.note.show.premiered;
    const date = new Date(str);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
      <div className='full'>
        <img className='full-img' src={props.note.show.image.medium} alt="can't be loaded" />
        {check === 0 ? (
            <div className='full-text'>
                <div className='name'> {props.note.show.name} </div>
                <div> Genres : 
                {props.note.show.genres.map((note,index) =>(
                    <span className='genres' key={index}> {note} </span>
                    ))}
                </div>
                <div className='premier'> Release Date : {date.getDate()}th  {month[date.getMonth()]}  {date.getUTCFullYear()}</div>
                <div className='premier'> Rating : {props.note.show.rating.average}</div>
                <div className='premier' dangerouslySetInnerHTML={{ __html: props.note.show.summary }}></div>
                <button onClick={update} className='update'> Book Tickets </button>
            </div>
            ):(
                <div className='full-text'>
                <div className='name'> Enter Details </div>
                <div class="input-container ic1">
                    <input id="Name" class="input" type="text" value={props.note.show.name} placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="Name" class="placeholder">Name</label>
                </div>
                <div class="input-container ic2">
                    <input id="Date" class="input" type="date" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="Date" class="placeholder">Date</label>
                </div>
                <div class="input-container ic2">
                    <input id="seat" class="input" type="number" placeholder=" " />
                    <div class="cut"></div>
                    <label for="seat" class="placeholder">No. of seats</label>
                </div>
                <button onClick={update} className='update'> Back </button>
                <button type="text" className="update">Submit</button>
                </div>
            )}
      </div>
  )
}

export default Fullview