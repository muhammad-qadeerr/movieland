import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=2b8d02b";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

/* All Short Course Intro*/

// import { useState, useEffect } from 'react';

// // const Person = (props) =>{
// //   return (
// //     <>
// //     <h1>First Name: {props.firstName}</h1>
// //     <h1>Last Name: {props.lastName}</h1>
// //     <h1>Age: {props.age}</h1>
// //     </>
// //   )
// // }

// const App = ()=> {
//   // const name = 'Qadeer';
//   // const inNameShowing = true;
//   const [counter, setCounter] = useState(0);   // Whenever we call and function starting with use we call it "Hook!".

//   // to see the effect on page reload.
//   useEffect(()=>{
//     //counter = 100;    // This won't cause an error but component won't be rendered, because we should never mutate a state manually.
//     // instead we will use setter
//     //setCounter(100);
//     alert("You have changed the counter to: " + counter)
//   },[counter])   // 2nd parameter, a dependency array empty, if we won't use it useEffect will be used with every activity on webpage.but if we write counter inside it again same issue will be caused.

//   return (
//     <div className="App">
//     {/* <h1>Hello, {inNameShowing ? name:'someone'}</h1>
//     {name? (
//       <>
//       <h1>{name}</h1>
//       </>
//     ):(
//       <>
//       <h1>No name is written</h1>
//       </>
//     )}
//     <h1>-----------------------------------------------------------</h1>
//     <Person firstName = 'Kabeer' lastName = 'Ali' age={23}/>
//     <Person firstName='Abdullah' lastName='Shafique' age={25}/> */}
//     <h1>----------------Demostration of useState Hook-----------------</h1>
//     <button onClick={()=>setCounter(counter-1)}>-1</button>
//     <h1>{counter}</h1>
//     <button onClick={()=>setCounter(counter+1)}>+1</button>
//     </div>
//   );
// }

// export default App;
