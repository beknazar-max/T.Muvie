import "./Header.css"
import search from "../../assets/search.svg"
import filter from "../../assets/filter.svg"
import bell from "../../assets/bell.svg"

export const Header = () => {
    const menu = ["All", "Movie", "Series", "Genres"]

    return (
        <>
            <header>
                <nav className="header-l">
                    {menu.map(item => <a className={item === "All" ? "active" : ""} key={item} href=""> {item}</a>)}
                </nav>
                <div className="header-r">
                    <div className="search">
                        <img className="search-icon" src={search} alt="" />
                        <input type="text" placeholder="Search the series, movies ..." />
                        <img src={filter} alt="" />
                    </div>
                    <div className="notification">
                        <img src={bell} alt="" />
                        <span className="red-cirle"></span>
                    </div>
                    <div className="profile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa0LN4L_4mLqhyHH-ep_BBbkYH1FvN3M6Wg&s" alt="" />
                    </div>
                </div>
            </header>
        </>

    )
}