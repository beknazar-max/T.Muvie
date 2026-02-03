import star from "../../assets/star.svg"
import like from "../../assets/like.svg"
import "./MovieCard.css"

const ImgUrl = "https://upload.wikimedia.org/wikipedia/en/f/f5/HotelTransylvania.jpg"

export const MovieCard = () => {
    return(
        <div className="card">
            <div className="card-body nebo nebo--tr">
                <img src={ImgUrl} alt="" />
                <span className="rating">
                <img src={star} alt="" />
                <span>7.0/</span>
                <span>10</span>
                </span>
                <div className="card-footer">
                    <h4>Hotel Transylvania</h4>
                    <p>Animation, Comedy</p>
                </div>
            </div>
            <span className="like-button">
                <img src={like} alt="" />
            </span>
        </div>
    )
}