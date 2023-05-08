import React ,{useState} from 'react'
import clsx from 'clsx'
import {  useNavigate } from "react-router-dom";




const movies = [
       {
        name: 'John Wick',
        price: 10,
        occupied: [20,21,30,1,2],
       
        },
       {
         name: "Avatar",
         price: 8,
         occupied: [37, 25, 44, 13, 2, 3]
       }
]
const seats = Array.from({length:8*8}, (_,i) => i)
export default function Bilet() {
  
  const refreshPage = ()=>{
     setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    }
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [ selectedSeats, setSelectedSeats ] = useState([])
    const navigate = useNavigate();

const navigateDashboard = (event) => {
    navigate("/payment");
};
    return(
        <div className="App">
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        Seçili Koltuk Sayısı : <span className="count">{selectedSeats.length}</span>{' '}
        Ücret: {' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}TL
        </span>
      </p>
     
      <button onClick={navigateDashboard} className='payment'>ÖDEME YAP</button>
    </div>
  )
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <h2>
          <label htmlFor="movie">Film : </label>
          <select className='select-style'
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option className='select-style' key={movie.name} value={movie.name}>
            {movie.name}
          </option>
        ))}
      </select>
          
      </h2>
      
    </div>
    )
}

function ShowCase() {
    return (
      <ul className="ShowCase">
        <li>
          <span className="seat" /> <small>Boş</small>
        </li>
        <li>
          <span className="seat selected" /> <small>Seçili</small>
        </li>
        <li>
          <span className="seat occupied" /> <small>Dolu</small>
        </li>
      </ul>
    )
  }

  function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    function handleSelectedState(seat) {
      const isSelected = selectedSeats.includes(seat)
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter(selectedSeat => selectedSeat !== seat),
        )
       
      } else {
        onSelectedSeatsChange([...selectedSeats, seat])
        
      }
     
      
    }
  
    return (
      <div className="Cinema">
        <div className='screen'>PERDE</div>
        <div className="seats">
          
          {seats.map(seat => {
            const isSelected = selectedSeats.includes(seat)
            const isOccupied = movie.occupied.includes(seat)
            return (
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  'seat',
                  isSelected && 'selected',
                  isOccupied && 'occupied',
                )}
                
                onClick={isOccupied ? null : () => handleSelectedState(seat) }
                onKeyPress={
                  isOccupied
                    ? null : e => {
                        if (e.key === 'Enter') {
                          handleSelectedState(seat)
                        }
                      }  
                }
              />
            )
          })}
        </div>
      </div>
    )
  }
  