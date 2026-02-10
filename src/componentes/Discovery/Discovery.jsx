import "./Discovery.css"

import shelbyfon from "../../assets/shelbyfon.png"
import watch from "../../assets/watch.svg"
import shelby from "../../assets/shelby.png"
import fog from "../../assets/fog.png"

export const Discovery = () => {
    return (

        <div className="discovery container">

            <div className="fon">
                <img src={shelby} alt="" />
            </div>

            <span className="span1">SHELBY</span>
            <span className="span2">DISTILLERY</span>

            <div className="description">
                <p>Peaky Blinders is a British crime drama about the Shelby family in post-World War I Birmingham, as they build their power through criminal activities. Led by the cunning Tommy Shelby, the show mixes intense drama with historical grit.</p>
            </div>

            <div className="btn">
                <button>
                    <img src={watch} alt="" />
                    <h5>WATCH TRAILER</h5>
                </button>
            </div>


            <div className="p-absolute">
                <p>BIRMINGHAM 1919</p>
            </div>

            <div className="h2-absolute">
                <h2>Peaky Blinders</h2>
            </div>

            <div className="shelby-absolute">
                <img src={shelbyfon} alt="" />
            </div>

            <div className="cloud-absolute">
                <img src={fog} alt="" />
            </div>

        </div>

    );
}