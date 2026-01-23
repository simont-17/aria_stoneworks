import NavBar from "../components/NavBar";
import test1 from "../images/hero_background.jpg"
import test2 from "../images/pexels-houzlook-3926542.jpg"

import '../style/Portfolio.css'

export default function PortfolioPage() {
    return (
        <>
            <div className='portfolio-hero-container'>
                <NavBar/>
                <div className='portfolio-hero-text-container'>
                    <h1>Our Work</h1>
                </div>
            </div>
            <div className='gallery-container'>
                <div className='gallery-row-container'>
                    <div className='gallery-column gallery-column-1'>
                        <img src={test1}></img>
                        <img src={test1}></img>
                        <img src={test2}></img>
                    </div>
                    <div className='gallery-column gallery-column-2'>
                        <img src={test1}></img>
                        <img src={test2}></img>
                        <img src={test2}></img>


                    </div>
                    <div className='gallery-column gallery-column-3'>
                        <img src={test1}></img>
                        <img src={test2}></img>
                        <img src={test2}></img>


                    </div>

                </div>

            </div>
        </>
    )
}