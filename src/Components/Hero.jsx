import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero(){
    return(
        <section className="hero">
            <div className="container hero-content">
                <h1>
                    ATS <br></br>
                    Annual Talent Search
                </h1>
                <p>Showcase your creativity, perform with confidence,
                  and become part of Mithibai College's biggest talent event.
                </p>

                <Link to="/register">
                   <button className="primary-btn">
                    Register Now
                   </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;
