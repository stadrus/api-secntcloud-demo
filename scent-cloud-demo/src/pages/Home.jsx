import Banner from "../assets/banner.png";
import Cream from "../assets/creamjar.png"
import Rollerball from "../assets/rollerball.png"
import Perfume from "../assets/perfume.png"
import Woman1 from "../assets/woman1.png"
import man1 from "../assets/man1.png"
import woman2 from "../assets/woman2.png"
import WeddingSilk from "../assets/weddingSilk.png"

const Home = () =>{
    return(
        <div className="home-container">
            <div className="banner">
                <img className="banner-img" src={Banner}></img>
                <div className="hero-text">
                    <h1>Text Here</h1>
                    <p>Text Here</p>
                    <button className="hero-button">Shop Now</button>
                </div>
            </div>
            
            <section className="tag">
                <h3>Featured Scents</h3>
                <p> Text Here</p>
            </section>

            <section className="products-gallery">
                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src={Cream} width={200}></img>
                            <h4 ><b>Whipped Body Butter</b></h4>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src={Perfume} width={200}></img>
                            <h4 ><b>Perfume Oil Spray</b></h4>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src={Rollerball} width={200}></img>
                            <h4 ><b>Perfume Oil Rollerball</b></h4>
                        </div>
                    </div>

                     <div className="card">
                        <div className="card-container">
                            <img className="card-img" src={WeddingSilk} width={200}></img>
                            <h4 ><b>Wedding Silk</b></h4>
                        </div>
                    </div>
            </section>

            <section className="reviews">
                    <div className="card-container">
                        <img className="card-img" src={Woman1} width={200}></img>
                        <h6>Customer One</h6>
                        <p>Text Here</p>
                    </div>

                    <div className="card-container">
                        <img className="card-img" src={man1} width={200}></img>
                        <h6>Customer One</h6>
                        <p>Text Here</p>
                    </div>
                
                    <div className="card-container">
                        <img className="card-img" src={woman2} width={200}></img>
                        <h6>Customer One</h6>
                        <p>Text Here</p>
                    </div>
            </section>

        </div>
    )
}

export default Home;