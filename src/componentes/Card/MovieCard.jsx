import star from "../../assets/star.svg"
import like from "../../assets/like.svg"
import "./MovieCard.css"

const ImgUrl = "https://image.tmdb.org/t/p/original"


export const MovieCard = (props) => {
    return(
        <div className="card">
            <div className="card-body nebo nebo--tr">
                <img src={ImgUrl + props.film.poster_path} alt="" />
                <span className="rating">
                <img src={star} alt="" />
                <span>{props.film.vote_average}</span>
                <span>/10</span>
                </span>
                <div className="card-footer">
                    <h4>{props.film.title}</h4>
                    {/* <p>{props.film.genre_ids}</p> */}
                </div>
            </div>
            <span className="like-button">
                <img src={like} alt="" />
            </span>
        </div>
    )
}