import { useEffect, useState } from "react"
import "./HomePage.css"
import { MovieCard } from "../../componentes/Card/MovieCard"



export const HomePage = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?language=ru&api_key=2fa8f297328a4293f06805fe0c1b915d")
            .then(res => res.json())
            .then(movies => {
                console.log(movies);
                setFilms(movies.results)
            });
    }, []);

    if (films?.length === 0) {
        return <h2 style={{ color: "white" }}>Loading...</h2>
    }

    return (
        <div>
            {films.map((film) => {
                return <MovieCard film={film} />
            })}
        </div>
    )
}