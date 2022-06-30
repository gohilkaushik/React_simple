import { NavLink } from "react-router-dom";
import hero from "../images/hero-bg.svg"

const Home = () => {
return (
    <>
        <section className="hero">
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="hero-left">
                        <div className="hero-left-outer">
                            <h1>Grow your business with <br/> <strong>Radicaalloop technology</strong></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus earum alias. Nisi voluptas repudiandae accusantium sequi impedit. Accusantium adipisci laboriosam officia iste magni saepe error quae totam ut nemo!</p>
                            <div className="mt-3">
                                <NavLink to='/' className='btn-get-started'>
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                    <div className="animeted">
                        <img src={hero} alt="hero-left-img" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Home;
