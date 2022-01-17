
import './App.css';
import React, {useState} from 'react'
import {moviesData} from './Data';
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import {BrowserRouter ,Switch ,Route} from 'react-router-dom';
import Desc from './components/Desc';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState('');
   const [rating, setRating] = useState(1);
   const handleAdd = (newMovie)=> setMovies ([...movies,newMovie])
   const handleText =(e)=> setText(e.target.value);
   const handleRating = (x) => setRating(x);
     return (
    <div className="App">
      <BrowserRouter>
 <AddMovie add={handleAdd} />
<Search rating={rating} text={text} handleText={handleText} handleRating={handleRating}/>
<Switch>
<Route  exact path="/" render={()=>
  <MoviesList  movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rating)}/>
} />
 <Route  path="/movie/:id" render={(props)=>
    <Desc movies={movies} {...props} />
  }/>

    </Switch>
    </BrowserRouter>
     </div>
  )
}

export default App


