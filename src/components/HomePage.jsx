
import NavBar from "../components/NavBar";
import Carousel from "../components/EmblaCarousel";
import { Link } from "react-router-dom";
import quartz_example from "../images/quartz_example.jpg"
import granite_example from "../images/granite_example.jpg"


import '../style/Home.css'
export default function HomePage() {
    return (
        <>
        <div className='home-container'>
            <div className='hero-container'>
                <NavBar/>
                <div className='hero-text-container'>
                    <h1>BUILD YOUR DREAM KITCHEN</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit laudantium iste in harum veritatis ipsam minima saepe, ducimus assumenda tempora necessitatibus voluptates minus laboriosam id magnam labore inventore. Ullam, minus.</p>
                    <div className="hero-button-container">
                        <Link to="/portfolio" className="hero-work-button">View Our Work</Link>
                        <Link to="/contact" className="hero-contact-button">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className='carousel-container'>
                <Carousel/>
            </div>
        <div className="home-about">
            <div className="home-about-images">
                <img src={quartz_example} className="img img-1" />
                <img src={granite_example} className="img img-2" />
            </div>
            <div className="home-about-text">
                <p>
                Aria Stonework is a trusted provider of premium countertop solutions, specializing in the fabrication and installation of granite and quartz surfaces. We are committed to delivering exceptional quality, precision craftsmanship, and lasting beauty for residential and commercial projects.

                Our granite countertops are sourced from high-quality natural stone, offering unique patterns, rich colors, and outstanding durability. Each slab is one of a kind, providing customers with a timeless and elegant surface that can withstand heat, scratches, and everyday wear.

                Our quartz countertops are engineered for performance and consistency, combining natural stone with advanced technology to create a non-porous, low-maintenance surface. Quartz offers a wide range of colors and styles, superior resistance to stains and bacteria, and a modern, uniform appearance ideal for today’s spaces.

                At Aria Stonework, we guide our clients through every step of the process, from material selection to custom fabrication and professional installation, ensuring results that enhance both functionality and design. Our goal is to provide countertops that not only elevate the look of a space but also deliver long-term value and reliability.
                </p>
            </div>
</div>

        </div>
       
        </>
    )
}