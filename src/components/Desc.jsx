import React from 'react'

const Desc = (props) => {
    console.log(props)
    let movie = props.movies.find(el=>el.id==props.match.params.id)
    console.log("movie",movie)
    return (
        <div>
            <p style={{color:'black'}}> {movie.dec}</p>
        </div>
    )
}

export default Desc